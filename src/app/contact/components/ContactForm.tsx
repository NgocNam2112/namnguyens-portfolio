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
import TextWrapper from '@/components/common/wrapper/TextWrapper';

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
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        y: [0, 2, 0],
      }}
      className="w-full"
    >
      <motion.div
        className="bg-card p-4 sm:p-6 lg:p-8 rounded-lg shadow-xs w-full max-w-2xl mx-auto"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          y: -5,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <TextWrapper
          variant="h3"
          weight="semibold"
          className="mb-4 sm:mb-6 text-center sm:text-left"
        >
          Send a Message
        </TextWrapper>

        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.div variants={fieldVariants} custom={0}>
                <FormController
                  name="name"
                  control={control}
                  Field={Input}
                  fieldProps={{
                    placeholder: 'Nam Nguyen...',
                    label: 'Your Name',
                    className:
                      'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base',
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
                      'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base',
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
                      'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base min-h-[100px] sm:min-h-[120px]',
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
                className="mt-2 sm:mt-4"
              >
                <Button
                  type="submit"
                  className="w-full py-2 sm:py-3 text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </motion.div>
            </div>
          </form>
        </FormProvider>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
