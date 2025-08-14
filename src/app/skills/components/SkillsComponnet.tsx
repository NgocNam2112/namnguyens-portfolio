'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, useSkillsService } from '../hooks/useSkillsService';
import SkillGrid from './SkillGrid';
import Loading from '@/components/common/Loading';

export const SkillsComponent = () => {
  const categories: Category[] = ['frontend', 'backend', 'tools'];
  const { data: skills, isLoading } = useSkillsService();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.section
      className="pt-24 relative bg-secondary/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My <span className="text-primary"> Skills</span>
        </motion.h2>

        <Tabs defaultValue="frontend" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TabsList className="mx-auto mb-8 flex gap-3">
              {categories.map(c => (
                <TabsTrigger
                  key={c}
                  value={c}
                  className="capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300 hover:bg-primary/80"
                >
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {categories.map(c => (
              <TabsContent key={c} value={c}>
                <SkillGrid
                  items={skills?.filter(s => s.category === c) || []}
                />
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default SkillsComponent;
