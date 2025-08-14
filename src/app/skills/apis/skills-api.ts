import { apiClient } from '@/apis/api-client';
import { Skill } from '../hooks/useSkillsService';

export const getSkills = async (): Promise<Skill[]> => {
  const response = await apiClient.get<Skill[]>('/skills_746129181');
  return response.result;
};
