import { useQuery } from '@tanstack/react-query';
import { getContact } from '../apis/contact-apis';

export interface Contact {
  id: number;
  heading: string;
  subtitle: string;
  methods: {
    type: 'email' | 'phone' | 'location' | string;
    label: string;
    value: string;
  }[];
  socials: {
    platform: string;
    url: string;
    handle?: string;
  }[];
  form: {
    labels: {
      name: string;
      email: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    submitText: string;
  };
}

export const useContact = () => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: getContact,
  });
};
