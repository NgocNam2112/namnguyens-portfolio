import React from 'react';
import { Project } from '../hooks/useProjectsService';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ProjectDetailModal from './ProjectDetailModal';

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
        className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full"
        animate={{ scale: isActive ? 1.02 : 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div className="relative z-10 group h-full">
          <div className="relative border-2 border-black mb-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={470}
              height={192}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4 px-6 py-4">
            <h3 className="text-2xl font-semibold text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs border text-gray-300 text-xs font-semibold rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 8 && (
                <span className="border text-gray-300 text-xs font-semibold px-3 py-1.5 rounded">
                  +{project.technologies.length - 8}
                </span>
              )}
            </div>
          </div>

          <div
            className={cn(
              'absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200',
              selectedProject?.id === project.id ? 'opacity-100' : 'opacity-0'
            )}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <ProjectDetailModal
              project={project}
              onSelectProject={setSelectedProject}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
