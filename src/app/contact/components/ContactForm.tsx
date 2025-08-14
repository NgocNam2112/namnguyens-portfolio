import FormController from '@/components/common/form/FormController';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactFormData, contactFormSchema } from '../hook/useContactForm';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { control } = form;

  return (
    <div className="bg-card p-8 rounded-lg shadow-xs">
      <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

      <FormProvider {...form}>
        <div className="flex flex-col gap-2">
          <FormController
            name="name"
            control={control}
            Field={Input}
            fieldProps={{
              placeholder: 'Nam Nguyen...',
              label: 'Your Name',
              className:
                'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary',
            }}
          />

          <FormController
            name="email"
            control={control}
            Field={Input}
            fieldProps={{
              placeholder: 'nguyenngocnam2112hit@gmail.com',
              label: 'Your Email',
              className:
                'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary',
            }}
          />

          <FormController
            name="message"
            control={control}
            Field={Textarea}
            fieldProps={{
              placeholder: "Hello, I'd like to talk about...",
              label: 'Your Message',
              className:
                'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary',
            }}
          />

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
