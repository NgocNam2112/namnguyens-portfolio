import React from 'react';
import { Project } from '../hooks/useProjectsService';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ProjectDetailModal from './ProjectDetailModal';
import {
  cardVariants,
  contentVariants,
  imageVariants,
  techVariants,
} from '../constants';

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
  const isActive = selectedProject?.id === project.id;

  return (
    <>
      <motion.div
        className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-[450px]"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: 'easeOut' as const },
        }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <motion.div className="relative z-10 group h-full">
          <motion.div
            className="relative border-2 border-black mb-6 overflow-hidden"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="space-y-4 px-6 py-4"
            variants={contentVariants}
          >
            <motion.h3
              className="text-2xl font-semibold text-primary"
              whileHover={{ color: '#a78bfa' }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed line-clamp-2 overflow-hidden text-ellipsis"
              whileHover={{ color: '#d1d5db' }}
              transition={{ duration: 0.2 }}
            >
              {project.description}
            </motion.p>
            <motion.div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs border text-gray-300 text-xs font-semibold rounded"
                  variants={techVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: '#374151',
                    borderColor: '#a78bfa',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
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
                    scale: 1.1,
                    backgroundColor: '#374151',
                    borderColor: '#a78bfa',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  +{project.technologies.length - 8}
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className={cn(
              'absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-2 border-primary/20 backdrop-blur-sm',
              selectedProject?.id === project.id ? 'opacity-100' : 'opacity-0'
            )}
            style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)' }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetailModal
              project={project}
              onSelectProject={setSelectedProject}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
