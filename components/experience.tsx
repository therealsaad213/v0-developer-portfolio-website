'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const experiences = [
    {
      period: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications, mentoring junior developers, and architecting system solutions.',
      tech: ['React', 'Node.js', 'Firebase', 'GraphQL'],
    },
    {
      period: '2022 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Built and maintained multiple client projects using modern web technologies and best practices.',
      tech: ['React', 'Express.js', 'MongoDB', 'AWS'],
    },
    {
      period: '2021 - 2022',
      title: 'Frontend Developer',
      company: 'Creative Studios',
      description: 'Developed responsive web interfaces and implemented interactive features using React and advanced CSS.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    },
    {
      period: '2020 - 2021',
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      description: 'Started professional journey building web applications, learning modern development practices.',
      tech: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
    },
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
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Experience
          </h2>
          <p className="text-slate-400">My professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline node */}
                <div className="flex flex-col items-center md:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50" />
                    <div className="relative w-8 h-8 rounded-full bg-slate-950 border-4 border-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="group rounded-lg border border-cyan-400/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    
                    <div className="relative z-10">
                      <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-purple-300 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
