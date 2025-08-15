'use client';

import { motion } from 'framer-motion';
import { useContact } from '../hook/useContactService';
import Loading from '@/components/common/Loading';
import ContactForm from './ContactForm';
import ContactInfor from './ContactInfor';
import { containerVariants, itemVariants, titleVariants } from '../constants';
import { useState } from 'react';

export const ContactComponent = () => {
  const { data: contact, isLoading: isContactLoading } = useContact();
  const [loading, setLoading] = useState(false);

  if (isContactLoading || loading) {
    return <Loading />;
  }

  return (
    <motion.section
      className="py-24 px-4 relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={titleVariants}
        >
          Get In <span className="text-primary"> Touch</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={itemVariants}
        >
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
          >
            <ContactForm setLoading={setLoading} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
