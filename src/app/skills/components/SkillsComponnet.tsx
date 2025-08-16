'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, useSkillsService } from '../hooks/useSkillsService';
import Loading from '@/components/common/Loading';
import PageWrapper from '@/components/common/wrapper/PageWrapper';
import { containerVariants } from '../constants';
import SkillItem from './SkillItem';

export const SkillsComponent = () => {
  const categories: Category[] = ['frontend', 'backend', 'tools'];
  const { data: skills, isLoading } = useSkillsService();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageWrapper
      headline={
        <>
          My <span className="text-primary"> Skills</span>
        </>
      }
      className="overflow-y-auto overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-full overflow-hidden flex flex-col pb-10"
      >
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <Tabs defaultValue="frontend" className="w-full h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <TabsList className="mx-auto mb-6 sm:mb-8 flex gap-2 sm:gap-3">
                {categories.map(c => (
                  <TabsTrigger
                    key={c}
                    value={c}
                    className="capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300 hover:bg-primary/80 text-sm sm:text-base px-3 sm:px-4 py-2"
                  >
                    {c}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              {categories.map(c => (
                <TabsContent
                  key={c}
                  value={c}
                  className="mt-0 flex-1 flex flex-col min-h-0 h-full"
                >
                  <div className="flex-1 custom-scrollbar">
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {skills
                        ?.filter(s => s.category === c)
                        ?.map((skill, index) => (
                          <SkillItem key={index} skill={skill} />
                        ))}
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default SkillsComponent;
