import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../apis/projects-api';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  technologies: string[];
  members: {
    name: string;
    role: string;
  }[];
  features: string[];
}

const PROJECTS_QUERY_KEY = 'projects';

export const useProjects = () => {
  return useQuery({
    queryKey: [PROJECTS_QUERY_KEY],
    queryFn: getProjects,
  });
};
