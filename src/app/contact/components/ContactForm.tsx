import FormController from '@/components/common/form/FormController';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactFormData, contactFormSchema } from '../hook/useContactForm';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { formVariants, fieldVariants, buttonVariants } from '../constants';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

interface ContactFormProps {
  setLoading: (loading: boolean) => void;
}

const ContactForm = ({ setLoading }: ContactFormProps) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('Message Sent Successfully!', {
        description: 'Thank you for reaching out. I will get back to you soon.',
        duration: 5000,
      });

      reset();
    } catch (error) {
      toast.error('Failed to Send Message', {
        description: 'Please try again later or contact me directly.',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-card p-8 rounded-lg shadow-xs"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <motion.h3
        className="text-2xl font-semibold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Send a Message
      </motion.h3>

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <motion.div variants={fieldVariants} custom={0}>
              <FormController
                name="name"
                control={control}
                Field={Input}
                fieldProps={{
                  placeholder: 'Nam Nguyen...',
                  label: 'Your Name',
                  className:
                    'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary',
                }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} custom={1}>
              <FormController
                name="email"
                control={control}
                Field={Input}
                fieldProps={{
                  placeholder: 'nguyenngocnam2112hit@gmail.com',
                  label: 'Your Email',
                  className:
                    'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary',
                }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} custom={2}>
              <FormController
                name="message"
                control={control}
                Field={Textarea}
                fieldProps={{
                  placeholder: "Hello, I'd like to talk about...",
                  label: 'Your Message',
                  className:
                    'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary',
                }}
              />
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </div>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default ContactForm;
