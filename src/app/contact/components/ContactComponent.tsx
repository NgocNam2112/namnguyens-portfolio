'use client';

import { motion } from 'framer-motion';
import { useContact } from '../hook/useContactService';
import Loading from '@/components/common/Loading';
import ContactForm from './ContactForm';
import ContactInfor from './ContactInfor';
import { containerVariants } from '../constants';
import { useState } from 'react';
import TextWrapper from '@/components/common/wrapper/TextWrapper';
import ContainerWrapper from '@/components/common/wrapper/ContainerWrapper';
import SelectionWrapper from '@/components/common/wrapper/SelectionWrapper';
import GridWrapper from '@/components/common/wrapper/GridWrapper';

export const ContactComponent = () => {
  const { data: contact, isLoading: isContactLoading } = useContact();
  const [loading, setLoading] = useState(false);

  if (isContactLoading || loading) {
    return <Loading />;
  }

  return (
    <SelectionWrapper
      padding="xl"
      container={false}
      className="py-24 relative bg-secondary/30"
    >
      <ContainerWrapper size="lg" maxWidth="3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <TextWrapper
            variant="h2"
            weight="bold"
            align="center"
            className="mb-4"
          >
            Get In <span className="text-primary"> Touch</span>
          </TextWrapper>

          <TextWrapper
            variant="p"
            color="muted"
            align="center"
            className="mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </TextWrapper>

          <GridWrapper cols={{ xs: 1, md: 2 }} gap="lg" className="items-start">
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -2, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="w-full"
            >
              <ContactInfor contact={contact} />
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, 2, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                },
              }}
              className="w-full"
            >
              <ContactForm setLoading={setLoading} />
            </motion.div>
          </GridWrapper>
        </motion.div>
      </ContainerWrapper>
    </SelectionWrapper>
  );
};
