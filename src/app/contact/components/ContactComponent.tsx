'use client';

import { useContact } from '../hook/useContactService';
import Loading from '@/components/common/Loading';
import ContactForm from './ContactForm';
import ContactInfor from './ContactInfor';
import { useState } from 'react';
import PageWrapper from '@/components/common/wrapper/PageWrapper';

export const ContactComponent = () => {
  const { data: contact, isLoading: isContactLoading } = useContact();
  const [loading, setLoading] = useState(false);

  if (isContactLoading || loading) {
    return <Loading />;
  }

  return (
    <PageWrapper
      headline={
        <>
          Get In <span className="text-primary"> Touch</span>
        </>
      }
      description="Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactInfor contact={contact} />
        <ContactForm setLoading={setLoading} />
      </div>
    </PageWrapper>
  );
};
