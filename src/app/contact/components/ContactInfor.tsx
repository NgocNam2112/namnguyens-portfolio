import { Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Contact } from '../hook/useContactService';
import {
  containerVariants,
  iconVariants,
  itemVariants,
  socialVariants,
} from '../constants';

interface ContactInforProps {
  contact: Contact[] | undefined;
}

const ContactInfor = ({ contact }: ContactInforProps) => {
  return (
    <>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-2xl font-semibold mb-6"
          variants={itemVariants}
        >
          Contact Information
        </motion.h3>

        <motion.div
          className="space-y-6 justify-center"
          variants={containerVariants}
        >
          {contact?.[0]?.methods.map((method, index) => (
            <motion.div
              key={method.type}
              className="flex items-start space-x-4"
              variants={itemVariants}
              custom={index}
              whileHover={{
                x: 5,
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
            >
              <motion.div
                className="p-3 rounded-full bg-primary/10"
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  transition: { duration: 0.2 },
                }}
              >
                {method.type === 'email' ? (
                  <Mail className="h-6 w-6 text-primary" />
                ) : method.type === 'linkedin' ? (
                  <Linkedin className="h-6 w-6 text-primary" />
                ) : (
                  <MapPin className="h-6 w-6 text-primary" />
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  x: 3,
                  transition: { duration: 0.2 },
                }}
              >
                <h4 className="font-medium"> {method.label}</h4>
                {method.type === 'linkedin' ? (
                  <Link
                    href={method.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {method.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    {method.value}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="pt-8" variants={socialVariants}>
          <h4 className="font-medium mb-4"> Connect With Me</h4>
          <motion.div
            className="flex space-x-4 justify-center"
            variants={containerVariants}
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                y: -3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={contact?.[0]?.socials[0]?.url ?? ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                y: -3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={contact?.[0]?.socials[1]?.url ?? ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactInfor;
