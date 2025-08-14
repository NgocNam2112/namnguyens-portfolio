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

const AboutComponent = () => {
  const { data: about, isLoading } = useAbout();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-24 relative">
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              {about?.[0]?.title || ''}
            </motion.h3>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              I bring <b className="text-primary">4+ years</b> of frontend and{' '}
              <b className="text-primary">2+ years</b> of backend experience
              building responsive, scalable web applications. On the frontend I
              work with
              <b className="text-primary"> NextJS, ReactJS, NuxtJS, VueJS</b>;
              on the backend I use{' '}
              <b className="text-primary">NodeJS, NestJS, ExpressJS, Java</b>{' '}
              with
              <b className="text-primary"> MySQL</b> and{' '}
              <b className="text-primary">MongoDB</b>.
            </motion.p>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              I have hands-on DevOps experience with{' '}
              <b className="text-primary">Docker</b> and{' '}
              <b className="text-primary">Kubernetes</b>, CI/CD using{' '}
              <b className="text-primary">GitLab</b> and GitHub, and deployments
              on <b className="text-primary">AWS</b>. I care about clean
              architecture, performance, and delivering reliable features from
              concept to production.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants}>
                <Link href="/contact">
                  <Button className="cosmic-button rounded-full px-6 py-2">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Link
                  href="/cv/NAM_NGUYEN_NGOC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="cosmic-button px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    View My CV
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
          >
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building high-quality interfaces with{' '}
                    <b className="text-primary">
                      NextJS, ReactJS, NuxtJS, VueJS
                    </b>
                    . Focused on accessibility, SEO, and performance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <User className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Designing and delivering REST APIs and services with
                    <b className="text-primary">
                      {' '}
                      NodeJS, NestJS, ExpressJS, Java{' '}
                    </b>
                    , backed by
                    <b className="text-primary"> MySQL</b> and{' '}
                    <b className="text-primary">MongoDB</b>. Emphasis on clean
                    architecture, security, and reliability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Deployment</h4>
                  <p className="text-muted-foreground">
                    Shipping to production with{' '}
                    <b className="text-primary">Docker</b>,{' '}
                    <b className="text-primary">Kubernetes</b>, and
                    <b className="text-primary"> GitLab CI/CD</b>; managing
                    cloud infrastructure on <b className="text-primary">AWS</b>{' '}
                    for scalable, maintainable systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
