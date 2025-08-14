import { motion } from 'framer-motion';
import { Skill } from '../hooks/useSkillsService';
import { containerVariants, cardVariants } from '../constants';
import Image from 'next/image';
import { pluralYears } from '@/utils/year';

interface SkillGridProps {
  items: Skill[];
}

const SkillGrid = ({ items }: SkillGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={cardVariants}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-card p-6 rounded-lg shadow-xs cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 mb-3">
              <motion.span
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name + ' icon'}
                  className="h-6 w-6 object-contain rounded-full"
                  loading="lazy"
                  width={24}
                  height={24}
                />
              </motion.span>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>

            <motion.span
              className="text-xs px-2 py-1 rounded-full border border-primary/40 text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {pluralYears(skill.years)}
            </motion.span>
          </div>

          <p className="text-sm text-muted-foreground mb-3">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;
