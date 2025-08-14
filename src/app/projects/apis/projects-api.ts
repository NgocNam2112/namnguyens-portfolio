import { apiClient } from '@/apis/api-client';
import { Project } from '../hooks/useProjectsService';

export const getProjects = async (): Promise<Project[]> => {
  const { result } = await apiClient.get<Project[]>('/projects_746129181');
  return result;
};
