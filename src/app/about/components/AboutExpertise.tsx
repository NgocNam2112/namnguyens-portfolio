'use client';

import React from 'react';
import { Briefcase, Code, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants } from '../constants';
import TextWrapper from '@/components/common/wrapper/TextWrapper';

const AboutExpertise: React.FC = () => {
  return (
    <motion.div
      className="space-y-4 sm:space-y-6 col-span-2 lg:col-span-1"
      variants={containerVariants}
    >
      <motion.div
        className="gradient-border p-4 sm:p-6 card-hover"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </motion.div>
          <div className="text-left min-w-0">
            <TextWrapper variant="h4" weight="semibold" className="mb-2">
              Frontend Development
            </TextWrapper>

            <TextWrapper
              variant="p"
              size="sm"
              color="muted"
              className="text-justify"
            >
              Building high-quality interfaces with{' '}
              <b className="text-primary">NextJS, ReactJS, NuxtJS, VueJS</b>.
              Focused on accessibility, SEO, and performance.
            </TextWrapper>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="gradient-border p-4 sm:p-6 card-hover"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </motion.div>
          <div className="text-left min-w-0">
            <TextWrapper variant="h4" weight="semibold" className="mb-2">
              Backend Development
            </TextWrapper>
            <TextWrapper
              variant="p"
              size="sm"
              color="muted"
              className="text-justify"
            >
              Designing and delivering REST APIs and services with
              <b className="text-primary"> NodeJS, NestJS, ExpressJS, Java </b>,
              backed by
              <b className="text-primary"> MySQL</b> and{' '}
              <b className="text-primary">MongoDB</b>. Emphasis on clean
              architecture, security, and reliability.
            </TextWrapper>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="gradient-border p-4 sm:p-6 card-hover"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </motion.div>

          <div className="text-left min-w-0">
            <TextWrapper variant="h4" weight="semibold" className="mb-2">
              DevOps & Deployment
            </TextWrapper>
            <TextWrapper
              variant="p"
              size="sm"
              color="muted"
              className="text-justify"
            >
              Shipping to production with <b className="text-primary">Docker</b>
              , <b className="text-primary">Kubernetes</b>, and
              <b className="text-primary"> GitLab CI/CD</b>; managing cloud
              infrastructure on <b className="text-primary">AWS</b> for
              scalable, maintainable systems.
            </TextWrapper>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutExpertise;
