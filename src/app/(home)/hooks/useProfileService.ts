import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../apis/profile-api';

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  imageUrl: string;
}

const PROFILE_QUERY_KEY = 'profile';

export const useProfile = () => {
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY],
    queryFn: getProfile,
  });
};
