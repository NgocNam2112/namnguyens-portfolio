import { apiClient } from '@/apis/api-client';
import { AboutMe } from '../hooks/useAboutService';

export const getAboutMe = async (): Promise<AboutMe[]> => {
  const { result } = await apiClient.get<AboutMe[]>('/aboutme_746129181');
  return result;
};
