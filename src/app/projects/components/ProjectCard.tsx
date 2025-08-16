import React from 'react';
import { Project } from '../hooks/useProjectsService';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  cardVariants,
  contentVariants,
  imageVariants,
  techVariants,
} from '../constants';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import TextWrapper from '@/components/common/wrapper/TextWrapper';

interface ProjectCardProps {
  project: Project;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectCard = ({
  project,
  selectedProject,
  setSelectedProject,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      }}
      whileTap={{
        scale: 0.97,
        y: -2,
        transition: {
          duration: 0.15,
          ease: 'easeOut',
        },
      }}
      layout
    >
      <motion.div
        className="relative border-2 border-black overflow-hidden"
        variants={imageVariants}
        whileHover={{
          scale: 1.08,
          transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
          },
        }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={470}
          height={192}
          className="w-full h-auto object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut' as const,
          }}
        />
      </motion.div>

      <motion.div className="space-y-4 py-2 sm:py-4" variants={contentVariants}>
        <div className="flex flex-wrap justify-between items-start gap-3 px-2 sm:px-4">
          <TextWrapper
            variant="p"
            size="xl"
            color="primary"
            weight="semibold"
            className="text-wrap flex-1"
          >
            {project.title}
          </TextWrapper>
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 block lg:hidden"
            onClick={() => setSelectedProject(project)}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-3 px-2 sm:px-4">
          <TextWrapper
            variant="p"
            size="sm"
            weight="normal"
            className="text-wrap flex-1"
          >
            {project.description}
          </TextWrapper>
          <p></p>
        </div>

        <motion.div className="flex flex-wrap gap-2 px-2 sm:px-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs border text-gray-300 text-xs font-semibold rounded"
              variants={techVariants}
              custom={index}
              whileHover={{
                scale: 1.15,
                y: -3,
                backgroundColor: '#374151',
                borderColor: '#a78bfa',
                transition: {
                  duration: 0.3,
                  ease: 'easeOut' as const,
                },
              }}
              whileTap={{
                scale: 0.92,
                y: 0,
                transition: {
                  duration: 0.15,
                  ease: 'easeOut' as const,
                },
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut' as const,
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 8 && (
            <motion.span
              className="border text-gray-300 text-xs font-semibold px-3 py-1.5 rounded"
              variants={techVariants}
              custom={3}
              whileHover={{
                scale: 1.15,
                y: -3,
                backgroundColor: '#374151',
                borderColor: '#a78bfa',
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              whileTap={{
                scale: 0.92,
                y: 0,
                transition: {
                  duration: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              +{project.technologies.length - 8}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className={cn(
          'absolute top-0 left-0 w-full h-full p-6 hidden lg:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-2 border-primary/20 backdrop-blur-sm',
          selectedProject?.id === project.id ? 'opacity-100' : 'opacity-0'
        )}
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileHover={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
          },
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut' as const,
        }}
      >
        <Button
          className="px-6 py-2 rounded-md font-semibold cursor-pointer cosmic-button"
          onClick={() => setSelectedProject(project)}
        >
          View Details
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
