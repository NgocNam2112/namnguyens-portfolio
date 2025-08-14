import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';
const API_TIMEOUT = 10000;
const AUTH_TOKEN_KEY = 'auth_token';

export interface ApiResponse<T = unknown> {
  status: string;
  code: number;
  result: T;
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      config => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('API Request:', config.method?.toUpperCase(), config.url);
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('API Response:', response.status, response.config.url);
        }

        return response;
      },
      error => {
        const apiError: ApiError = {
          message:
            error.response?.data?.message ||
            error.message ||
            'An error occurred',
          status: error.response?.status,
          code: error.code,
        };

        if (process.env.NODE_ENV === 'development') {
          console.error('API Error:', apiError);
        }

        return Promise.reject(apiError);
      }
    );
  }

  private getAuthToken(): string | null {
    const token = getCookie(AUTH_TOKEN_KEY);
    return typeof token === 'string' ? token : null;
  }

  // Generic request method
  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<ApiResponse<T>>(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'GET',
      url,
      ...config,
    });
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
      ...config,
    });
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
      ...config,
    });
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PATCH',
      url,
      data,
      ...config,
    });
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...config,
    });
  }

  async upload<T>(
    url: string,
    file: File,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.request<T>({
      method: 'POST',
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    });
  }

  setAuthToken(token: string, days: number = 7): void {
    setCookie(AUTH_TOKEN_KEY, token, {
      maxAge: days * 24 * 60 * 60,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  clearAuthToken(): void {
    deleteCookie(AUTH_TOKEN_KEY);
  }
}

export const apiClient = new ApiClient();

export default ApiClient;
