'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';
import { Code2, Database, Zap } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['C', 'C++', 'Python', 'Core Java', 'JavaScript', 'TypeScript']
  },
  {
    name: 'Frontend',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Backend & Database',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express.js', 'Firebase', 'Supabase', 'MongoDB', 'PostgreSQL']
  },
  {
    name: 'Mobile & Extra',
    icon: Code2,
    color: 'from-orange-500 to-red-500',
    skills: ['Flutter', 'REST APIs', 'Git', 'GitHub', 'Vercel', 'Web3 Basics']
  }
];

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-4 relative bg-gradient-to-b from-transparent via-purple-50/20 dark:via-purple-950/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Skill Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive toolkit built through hands-on development, combining frontend magic with robust backend architecture.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                  className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-xl dark:hover:shadow-none relative overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {category.skills.map((skill, index) => (
                      <motion.button
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20`}
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>

                  {/* Decorative Glow */}
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-10 pointer-events-none`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            Always learning and exploring new technologies. Currently diving deep into advanced backend architecture and modern DevOps.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="https://github.com/therealsaad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold hover:shadow-lg dark:hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Explore My GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
