'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const experiences = [
    {
      period: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Waafi Associates LLC AFZ',
      description: 'Developed and maintained full-stack web applications for consulting and technology services. Built e-commerce solutions, internal dashboards, and cyber security advisory platforms using modern tech stack.',
      tech: ['React', 'Next.js', 'Node.js', 'Firebase', 'Supabase', 'Tailwind CSS'],
      link: 'https://waafiassociates.vercel.app/'
    },
    {
      period: '2023 - 2024',
      title: 'Freelance Full Stack Developer',
      company: 'Multiple Clients',
      description: 'Delivered custom web solutions including farmhouse booking platforms with AI recommendations, e-commerce stores, and corporate websites. Worked independently managing projects from design to deployment.',
      tech: ['React', 'Next.js', 'Express.js', 'MongoDB', 'Firebase', 'Vercel'],
    },
    {
      period: '2023 - Present',
      title: 'FunFarm - AI Farmhouse Platform',
      company: 'Personal Project',
      description: 'Built a full-featured farmhouse discovery and booking platform with AI-powered recommendations. Implemented real-time booking system, payment integration, and advanced search with 156+ property listings.',
      tech: ['Next.js', 'React', 'Supabase', 'Stripe', 'Tailwind CSS'],
      link: 'https://farmbysaad.vercel.app/'
    },
    {
      period: '2022 - 2023',
      title: 'Learning & Building Foundation',
      company: 'Self-Taught Developer',
      description: 'Intense learning phase building fundamentals in web development, mastering JavaScript, React, Node.js, and full-stack development through projects and continuous practice.',
      tech: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git'],
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
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-transparent via-cyan-50/20 dark:via-cyan-950/10 to-transparent"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400">My professional path and growth</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 dark:from-cyan-500 to-purple-500 transform md:-translate-x-1/2 hidden md:block" />

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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 dark:from-cyan-500 to-purple-500 rounded-full blur-md opacity-50" />
                    <div className="relative w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 dark:border-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="group rounded-lg border border-blue-300 dark:border-cyan-400/20 bg-white dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-purple-900/20 p-6 backdrop-blur-md hover:border-blue-400 dark:hover:border-cyan-400/50 shadow-lg dark:shadow-none transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 dark:from-cyan-500/5 via-transparent to-purple-100/20 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    
                    <div className="relative z-10">
                      <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-purple-300 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-purple-500/20 text-blue-700 dark:text-purple-300 border border-blue-300 dark:border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors gap-1 font-medium"
                        >
                          Visit Project →
                        </a>
                      )}
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
