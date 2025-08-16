'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../hooks/useProjectsService';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectDetailModalProps {
  open: boolean;
  project: Project;
  onSelectProject: (project: Project | null) => void;
}

const ProjectDetailModal = ({
  open,
  project,
  onSelectProject,
}: ProjectDetailModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent
        className="max-h-4/5 flex flex-col sm:w-[40vw] md:w-[75%] w-[90%] custom-scrollbar"
        aria-describedby={undefined}
        onInteractOutside={event => {
          event.preventDefault();
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1.5 right-1.5 text-white bg-inherit z-50"
          onClick={() => onSelectProject(null)}
        >
          <X className="h-6 w-6" />
        </Button>
        <DialogHeader className="flex-shrink-0 border-b pb-4">
          <DialogTitle className="text-2xl font-bold text-white text-primary">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-white leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto flex-grow flex-1">
          <div className="relative border-2">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover opacity-100"
            />
            <div
              className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <Link href={project.link} target="_blank">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white"
                >
                  <ExternalLink size={20} className="text-primary" />
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Purpose</h4>
                <p className="text-gray-300">{project.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Team Members</h4>
                <ul className="text-white space-y-1">
                  {project?.members?.map((member, index) => (
                    <li key={index}>
                      • {member.name} - {member.role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="border text-gray-300 text-xs font-semibold px-3 py-1.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                <ul className="text-gray-300 space-y-1">
                  {project.features.map(feature => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
