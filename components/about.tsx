'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const milestones = [
    { year: '2020', title: 'Started Journey', desc: 'Began learning web development, JavaScript fundamentals' },
    { year: '2021', title: 'First Projects', desc: 'Launched freelance projects, mastered React basics' },
    { year: '2023', title: 'Full Stack Expert', desc: 'Advanced in Node.js, Firebase, databases, APIs' },
    { year: '2024', title: 'Production Ready', desc: 'Building commercial apps, AI integrations, scaling systems' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-blue-50/30 dark:from-slate-900/50 via-transparent to-transparent"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400">My journey as a full-stack developer</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Holographic card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl border border-blue-300 dark:border-cyan-400/30 bg-white dark:bg-slate-800/30 dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-purple-900/20 p-8 backdrop-blur-md overflow-hidden group shadow-xl dark:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 dark:from-cyan-500/10 via-transparent to-purple-100/20 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 dark:from-cyan-300 to-purple-600 dark:to-purple-300 bg-clip-text text-transparent mb-3">Who Am I?</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  I&apos;m a self-taught developer who started from zero and fell in love with building things on the web. I love turning complex problems into simple, beautiful solutions. Currently deep-diving into the MERN stack, with a growing interest in cybersecurity and freelancing.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold">Learning:</span> MERN Stack, Web3, System Design</p>
                <p className="text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold">Interested in:</span> Cybersecurity, Freelancing, Building real products</p>
                <p className="text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold">Based in:</span> India 🇮🇳</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-purple-500 flex items-center justify-center font-bold text-white shadow-lg dark:shadow-cyan-500/50">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-400 dark:from-cyan-400 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-blue-600 dark:text-cyan-400 font-semibold text-sm">{milestone.year}</p>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
