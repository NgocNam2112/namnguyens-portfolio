import { apiClient } from '@/apis/api-client';
import { Profile } from '../hooks/useProfileService';

export const getProfile = async (): Promise<Profile[]> => {
  const { result } = await apiClient.get<Profile[]>('/profile_746129181');
  return result;
};
