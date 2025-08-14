import { useQuery } from '@tanstack/react-query';
import { getAboutMe } from '../apis/about-apis';

export interface AboutMe {
  id: number;
  heading: string;
  title: string;
  summary: string;
  experience: {
    frontendYears: number;
    backendYears: number;
  };
  stacks: {
    frontend: string[];
    backend: string[];
    databases: string[];
    devops: string[];
  };
  cards: {
    id: number;
    slug: string;
    title: string;
    body: string;
    tools: string[];
    focus: string[];
  }[];
}

const ABOUT_QUERY_KEY = 'about';

export const useAbout = () => {
  return useQuery({
    queryKey: [ABOUT_QUERY_KEY],
    queryFn: getAboutMe,
  });
};
