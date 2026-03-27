'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', proficiency: 95 },
        { name: 'Next.js', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 95 },
        { name: 'Framer Motion', proficiency: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express.js', proficiency: 88 },
        { name: 'Firebase', proficiency: 92 },
        { name: 'RESTful APIs', proficiency: 90 },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', proficiency: 92 },
        { name: 'Docker', proficiency: 80 },
        { name: 'MongoDB', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 83 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Skills & Expertise
          </h2>
          <p className="text-slate-400">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={itemVariants}
              className="group rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-6 group-hover:text-cyan-200 transition-colors">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: categoryIdx * 0.2 + skillIdx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-purple-300">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIdx * 0.2 + skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
