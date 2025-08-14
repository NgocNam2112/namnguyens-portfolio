'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjectsService';
import Loading from '@/components/common/Loading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProjectCard from './ProjectCard';
import { Project } from '../hooks/useProjectsService';
import {
  carouselVariants,
  containerVariants,
  itemVariants,
} from '../constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProjectsComponent = () => {
  const { data: projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.section
      className="pt-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          {' '}
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <motion.div className="relative" variants={carouselVariants}>
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full select-none"
          >
            <CarouselContent className="-ml-2 md:-ml-4 gap-4">
              {projects?.map((project, key) => (
                <CarouselItem
                  key={key}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: key * 0.1,
                        ease: 'easeOut',
                      },
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ProjectCard
                      project={project}
                      selectedProject={selectedProject}
                      setSelectedProject={setSelectedProject}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <div className="flex justify-center">
          <Link href="/skills">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Button className="mt-12 mx-auto px-10 py-6 rounded-full cosmic-button text-lg">
                View My Skills
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsComponent;
