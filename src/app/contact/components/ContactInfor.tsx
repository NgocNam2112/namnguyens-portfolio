import { Linkedin, Mail, MapPin, Youtube, Github } from 'lucide-react';
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
import TextWrapper from '@/components/common/wrapper/TextWrapper';

interface ContactInforProps {
  contact: Contact[] | undefined;
}

const ContactInfor = ({ contact }: ContactInforProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        y: [0, -2, 0],
      }}
      className="w-full"
    >
      <motion.div
        className="space-y-6 sm:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextWrapper variant="h3" weight="semibold" className="mb-4 sm:mb-6">
          Contact Information
        </TextWrapper>

        <motion.div
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
        >
          {contact?.[0]?.methods.map((method, index) => (
            <motion.div
              key={method.type}
              className="flex items-start gap-3 sm:gap-4"
              variants={itemVariants}
              custom={index}
              whileHover={{
                x: 5,
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
            >
              <motion.div
                className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  transition: { duration: 0.2 },
                }}
              >
                {method.type === 'email' ? (
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                ) : method.type === 'linkedin' ? (
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                ) : (
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  x: 3,
                  transition: { duration: 0.2 },
                }}
                className="min-w-0 flex-1 overflow-hidden"
              >
                <TextWrapper variant="h4" weight="medium" className="mb-1">
                  {method.label}
                </TextWrapper>
                {method.type === 'linkedin' ? (
                  <Link
                    href={method.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors break-words text-sm sm:text-base block"
                    title={method.value}
                  >
                    {method.value}
                  </Link>
                ) : (
                  <p
                    className="text-muted-foreground hover:text-primary transition-colors break-words text-sm sm:text-base block"
                    title={method.value}
                  >
                    {method.value}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="pt-6 sm:pt-8" variants={socialVariants}>
          <TextWrapper
            variant="h4"
            weight="medium"
            className="mb-3 sm:mb-4 text-center sm:text-left"
          >
            Connect With Me
          </TextWrapper>
          <motion.div
            className="flex space-x-4 justify-center sm:justify-start"
            variants={containerVariants}
          >
            {contact?.[0]?.socials.map(social => (
              <motion.div
                key={social.platform}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform === 'linkedin' ? (
                    <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 text-primary hover:text-primary/80 transition-colors" />
                  ) : social.platform === 'youtube' ? (
                    <Youtube className="h-6 w-6 sm:h-7 sm:w-7 text-primary hover:text-primary/80 transition-colors" />
                  ) : social.platform === 'github' ? (
                    <Github className="h-6 w-6 sm:h-7 sm:w-7 text-primary hover:text-primary/80 transition-colors" />
                  ) : null}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfor;
