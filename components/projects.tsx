'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const projects = [
    {
      title: 'AI Resume Analyzer SaaS',
      description: 'Intelligent resume analysis platform powered by AI for job matching and improvement suggestions.',
      tech: ['Next.js', 'Firebase', 'OpenAI API', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Smart Expense Tracker',
      description: 'Real-time expense tracking application with AI-powered categorization and analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      color: 'from-purple-500 to-pink-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Freelancer Collaboration Platform',
      description: 'Decentralized marketplace connecting freelancers with clients for seamless project collaboration.',
      tech: ['React', 'Express', 'Firebase Auth', 'Stripe'],
      color: 'from-pink-500 to-rose-500',
      link: '#',
      github: '#',
    },
    {
      title: '3D Portfolio Builder',
      description: 'Interactive 3D portfolio creation tool with drag-and-drop components and real-time preview.',
      tech: ['Three.js', 'React Three Fiber', 'Next.js', 'Framer Motion'],
      color: 'from-green-500 to-emerald-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Crypto Trading Dashboard',
      description: 'Real-time cryptocurrency trading dashboard with advanced charting and portfolio management.',
      tech: ['React', 'WebSocket', 'Firebase', 'TradingView API'],
      color: 'from-orange-500 to-red-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Campus Event Management System',
      description: 'Comprehensive event management platform for universities with ticketing and live updates.',
      tech: ['Next.js', 'Firebase', 'Razorpay', 'Socket.io'],
      color: 'from-indigo-500 to-purple-500',
      link: '#',
      github: '#',
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
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Featured Projects
          </h2>
          <p className="text-slate-400">Building amazing digital products</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`} />
              <div className="relative rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/70 to-slate-800/70 p-6 backdrop-blur-md h-full flex flex-col hover:border-cyan-400/50 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                    <Link
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-purple-500/50 text-purple-300 text-sm font-semibold hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
