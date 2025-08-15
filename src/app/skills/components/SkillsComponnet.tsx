'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, useSkillsService } from '../hooks/useSkillsService';
import SkillGrid from './SkillGrid';
import Loading from '@/components/common/Loading';
import TextWrapper from '@/components/common/wrapper/TextWrapper';
import ContainerWrapper from '@/components/common/wrapper/ContainerWrapper';
import SelectionWrapper from '@/components/common/wrapper/SelectionWrapper';

export const SkillsComponent = () => {
  const categories: Category[] = ['frontend', 'backend', 'tools'];
  const { data: skills, isLoading } = useSkillsService();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SelectionWrapper
      padding="xl"
      container={false}
      className="pt-16 sm:pt-20 relative h-screen overflow-hidden"
    >
      <ContainerWrapper
        size="lg"
        maxWidth="3xl"
        className="h-full flex flex-col"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col"
        >
          <TextWrapper
            variant="h2"
            weight="bold"
            align="center"
            className="mb-6 sm:mb-8 flex-shrink-0"
          >
            My <span className="text-primary"> Skills</span>
          </TextWrapper>

          <div className="flex-1 flex flex-col min-h-0">
            <Tabs
              defaultValue="frontend"
              className="w-full h-full flex flex-col"
            >
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
                    className="mt-0 flex-1 flex flex-col min-h-0"
                  >
                    <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50">
                      <SkillGrid
                        items={skills?.filter(s => s.category === c) || []}
                      />
                    </div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </div>
        </motion.div>
      </ContainerWrapper>
    </SelectionWrapper>
  );
};

export default SkillsComponent;
