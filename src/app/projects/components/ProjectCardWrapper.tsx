import React from 'react';
import { motion } from 'framer-motion';
import { carouselVariants } from '../constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProjectCard from './ProjectCard';
import { Project } from '../hooks/useProjectsService';

interface ProjectCardWrapperProps {
  projects?: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectCardWrapper = ({
  projects,
  selectedProject,
  setSelectedProject,
}: ProjectCardWrapperProps) => {
  return (
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
  );
};

export default ProjectCardWrapper;
