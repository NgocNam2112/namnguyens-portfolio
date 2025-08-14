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

const ProjectsComponent = () => {
  const { data: projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.section
      className="py-24 relative"
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
              align: 'start',
              loop: true,
            }}
            className="w-full select-none"
          >
            <CarouselContent className="-ml-2 md:-ml-4 gap-4">
              {projects?.map((project, key) => (
                <CarouselItem key={key} className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
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
      </div>
    </motion.section>
  );
};

export default ProjectsComponent;
