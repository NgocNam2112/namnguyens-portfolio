import { apiClient } from '@/apis/api-client';
import { Contact } from '../hook/useContactService';

export const getContact = async (): Promise<Contact[]> => {
  const { result } = await apiClient.get<Contact[]>('/contact_746129181');
  return result;
};
