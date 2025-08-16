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
import ProjectDetailModal from './ProjectDetailModal';

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
    <>
      <motion.div
        className="relative flex flex-col"
        variants={carouselVariants}
        initial="hidden"
        animate="visible"
      >
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full select-none flex flex-col w-[calc(100vw-64px)] sm:w-full gap-4 mx-auto"
        >
          <motion.div
            className="justify-end gap-4 hidden sm:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeOut' as const,
            }}
          >
            <CarouselPrevious />
            <CarouselNext />
          </motion.div>
          <CarouselContent className="flex w-[calc(100vw-64px)] sm:w-full">
            {projects?.map((project, key) => (
              <CarouselItem
                key={key}
                className="basis-full md:basis-1/2 lg:basis-1/3 px-0 sm:px-2"
              >
                <ProjectCard
                  project={project}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <motion.div
            className="flex justify-center gap-4 sm:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeOut' as const,
            }}
          >
            <CarouselPrevious />
            <CarouselNext />
          </motion.div>
        </Carousel>
      </motion.div>

      {selectedProject && (
        <ProjectDetailModal
          open={!!selectedProject}
          project={selectedProject!}
          onSelectProject={setSelectedProject}
        />
      )}
    </>
  );
};

export default ProjectCardWrapper;
