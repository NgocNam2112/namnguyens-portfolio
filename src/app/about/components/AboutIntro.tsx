'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { itemVariants, buttonVariants } from '../constants';
import Link from 'next/link';
import TextWrapper from '@/components/common/wrapper/TextWrapper';

interface AboutIntroProps {
  title?: string;
}

const AboutIntro: React.FC<AboutIntroProps> = ({ title }) => {
  return (
    <motion.div
      className="space-y-4 sm:space-y-6 col-span-2 lg:col-span-1"
      variants={itemVariants}
    >
      <TextWrapper variant="h3" weight="semibold">
        {title || ''}
      </TextWrapper>

      <TextWrapper variant="p" color="muted" className="text-justify">
        I bring <b className="text-primary">5+ years</b> of frontend and{' '}
        <b className="text-primary">2+ years</b> of backend experience building
        responsive, scalable web applications. On the frontend I work with
        <b className="text-primary"> NextJS, ReactJS, NuxtJS, VueJS</b>; on the
        backend I use{' '}
        <b className="text-primary">NodeJS, NestJS, ExpressJS, Java</b> with
        <b className="text-primary"> MySQL</b> and{' '}
        <b className="text-primary">MongoDB</b>.
      </TextWrapper>

      <TextWrapper variant="p" color="muted" className="text-justify">
        I have hands-on DevOps experience with{' '}
        <b className="text-primary">Docker</b> and{' '}
        <b className="text-primary">Kubernetes</b>, CI/CD using{' '}
        <b className="text-primary">GitLab</b> and GitHub, and deployments on{' '}
        <b className="text-primary">AWS</b>. I care about clean architecture,
        performance, and delivering reliable features from concept to
        production.
      </TextWrapper>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center"
        variants={itemVariants}
      >
        <motion.div variants={buttonVariants} className="flex-1 sm:flex-none">
          <Link href="/contact">
            <Button className="cosmic-button w-full rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
              Get In Touch
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} className="flex-1 sm:flex-none">
          <Link
            href="/cv/NAM_NGUYEN_NGOC.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="cosmic-button w-full px-4 sm:px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base"
            >
              View My CV
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutIntro;
