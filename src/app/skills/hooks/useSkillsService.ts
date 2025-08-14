import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../apis/skills-api';

export type Category = 'frontend' | 'backend' | 'tools';

export type Skill = {
  name: string;
  years: number;
  category: Category;
  icon: string;
  description: string;
};

const SKILLS_QUERY_KEY = 'skills';

export const useSkillsService = () => {
  return useQuery({
    queryKey: [SKILLS_QUERY_KEY],
    queryFn: getSkills,
  });
};
