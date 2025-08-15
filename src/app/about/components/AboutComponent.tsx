'use client';

import React from 'react';
import { Briefcase, Code, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  cardVariants,
  buttonVariants,
} from '../constants';
import { useAbout } from '../hooks/useAboutService';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import TextWrapper from '@/components/common/wrapper/TextWrapper';
import ContainerWrapper from '@/components/common/wrapper/ContainerWrapper';
import SelectionWrapper from '@/components/common/wrapper/SelectionWrapper';
import GridWrapper from '@/components/common/wrapper/GridWrapper';

const AboutComponent = () => {
  const { data: about, isLoading } = useAbout();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SelectionWrapper padding="xl" container={false}>
      <ContainerWrapper size="lg" maxWidth="3xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TextWrapper
            variant="h2"
            weight="bold"
            align="center"
            className="mb-8 sm:mb-12"
          >
            About <span className="text-primary"> Me</span>
          </TextWrapper>

          <GridWrapper
            cols={{ xs: 1, lg: 2 }}
            gap="xl"
            className="items-center"
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              <TextWrapper variant="h3" weight="semibold">
                {about?.[0]?.title || ''}
              </TextWrapper>

              <TextWrapper variant="p" color="muted" className="text-justify">
                I bring <b className="text-primary">4+ years</b> of frontend and{' '}
                <b className="text-primary">2+ years</b> of backend experience
                building responsive, scalable web applications. On the frontend
                I work with
                <b className="text-primary"> NextJS, ReactJS, NuxtJS, VueJS</b>;
                on the backend I use{' '}
                <b className="text-primary">NodeJS, NestJS, ExpressJS, Java</b>{' '}
                with
                <b className="text-primary"> MySQL</b> and{' '}
                <b className="text-primary">MongoDB</b>.
              </TextWrapper>

              <TextWrapper variant="p" color="muted" className="text-justify">
                I have hands-on DevOps experience with{' '}
                <b className="text-primary">Docker</b> and{' '}
                <b className="text-primary">Kubernetes</b>, CI/CD using{' '}
                <b className="text-primary">GitLab</b> and GitHub, and
                deployments on <b className="text-primary">AWS</b>. I care about
                clean architecture, performance, and delivering reliable
                features from concept to production.
              </TextWrapper>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  className="flex-1 sm:flex-none"
                >
                  <Link href="/contact">
                    <Button className="cosmic-button w-full rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
                      Get In Touch
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  className="flex-1 sm:flex-none"
                >
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

            <motion.div
              className="space-y-4 sm:space-y-6"
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
                    <TextWrapper
                      variant="h4"
                      weight="semibold"
                      className="mb-2"
                    >
                      Frontend Development
                    </TextWrapper>
                    <TextWrapper
                      variant="p"
                      size="sm"
                      color="muted"
                      className="text-justify"
                    >
                      Building high-quality interfaces with{' '}
                      <b className="text-primary">
                        NextJS, ReactJS, NuxtJS, VueJS
                      </b>
                      . Focused on accessibility, SEO, and performance.
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
                    <TextWrapper
                      variant="h4"
                      weight="semibold"
                      className="mb-2"
                    >
                      Backend Development
                    </TextWrapper>
                    <TextWrapper
                      variant="p"
                      size="sm"
                      color="muted"
                      className="text-justify"
                    >
                      Designing and delivering REST APIs and services with
                      <b className="text-primary">
                        {' '}
                        NodeJS, NestJS, ExpressJS, Java{' '}
                      </b>
                      , backed by
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
                    <TextWrapper
                      variant="h4"
                      weight="semibold"
                      className="mb-2"
                    >
                      DevOps & Deployment
                    </TextWrapper>
                    <TextWrapper
                      variant="p"
                      size="sm"
                      color="muted"
                      className="text-justify"
                    >
                      Shipping to production with{' '}
                      <b className="text-primary">Docker</b>,{' '}
                      <b className="text-primary">Kubernetes</b>, and
                      <b className="text-primary"> GitLab CI/CD</b>; managing
                      cloud infrastructure on{' '}
                      <b className="text-primary">AWS</b> for scalable,
                      maintainable systems.
                    </TextWrapper>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </GridWrapper>
        </motion.div>
      </ContainerWrapper>
    </SelectionWrapper>
  );
};

export default AboutComponent;
