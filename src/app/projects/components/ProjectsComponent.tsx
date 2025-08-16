'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjectsService';
import Loading from '@/components/common/Loading';
import { Project } from '../hooks/useProjectsService';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/common/wrapper/PageWrapper';
import ProjectCardWrapper from './ProjectCardWrapper';

const ProjectsComponent = () => {
  const { data: projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageWrapper
      headline={
        <>
          Featured <span className="text-primary"> Projects </span>
        </>
      }
      description="Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience."
      className="pr-0"
      wrapperClassName="overflow-hidden"
    >
      <ProjectCardWrapper
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

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
    </PageWrapper>
  );
};

export default ProjectsComponent;
