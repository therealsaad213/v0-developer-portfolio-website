'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const milestones = [
    { year: '2020', title: 'Started Journey', desc: 'Began learning web development' },
    { year: '2021', title: 'First Project', desc: 'Launched freelance web projects' },
    { year: '2022', title: 'Full Stack', desc: 'Mastered React & Node.js' },
    { year: '2023', title: 'Expertise', desc: 'Advanced in Firebase & Cloud' },
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
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            About Me
          </h2>
          <p className="text-slate-400">My journey as a developer</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Holographic card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-8 backdrop-blur-md overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-3">Developer Profile</h3>
                <p className="text-slate-300 mb-4">
                  Passionate about creating intuitive and performant web applications. Specialized in building scalable full-stack solutions with modern technologies.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-purple-300">📍 Based in India</p>
                <p className="text-sm text-cyan-300">💼 Full Stack Developer</p>
                <p className="text-sm text-pink-300">🚀 Open to opportunities</p>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/50">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-cyan-400 font-semibold text-sm">{milestone.year}</p>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
