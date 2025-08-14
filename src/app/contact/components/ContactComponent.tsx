'use client';

import { useContact } from '../hook/useContactService';
import Loading from '@/components/common/Loading';
import ContactForm from './ContactForm';
import ContactInfor from './ContactInfor';

export const ContactComponent = () => {
  const { data: contact, isLoading } = useContact();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfor contact={contact} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
