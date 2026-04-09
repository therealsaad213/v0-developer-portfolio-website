'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const projects = [
    {
      title: 'FunFarm - AI Farmhouse Booking',
      description: 'AI-powered farmhouse discovery and booking platform with 156+ verified properties.',
      problem: 'Finding authentic farmhouses is hard, and most platforms lack personalized recommendations.',
      solution: 'Built an intelligent recommendation engine that learns user preferences to suggest perfect getaways.',
      learned: 'Advanced Supabase queries, payment integration with Stripe, and user behavior analysis.',
      tech: ['Next.js', 'React', 'Supabase', 'Stripe', 'Tailwind CSS'],
      color: 'from-green-500 to-emerald-500',
      link: 'https://farmbysaad.vercel.app/',
      github: 'https://github.com/therealsaad',
    },
    {
      title: 'Waafi Associates - B2B Platform',
      description: 'Professional consulting and technology services platform with multiple service offerings.',
      problem: 'B2B service providers need a single platform to showcase diverse expertise and services.',
      solution: 'Created an integrated B2B platform combining interior design, software dev, and cyber security services.',
      learned: 'Building scalable multi-service platforms, complex state management, and professional UI design.',
      tech: ['React', 'Next.js', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
      link: 'https://waafiassociates.vercel.app/',
      github: 'https://github.com/therealsaad',
    },
    {
      title: 'E-Commerce Product Management',
      description: 'Full-stack e-commerce platform with shopping cart, checkout, and inventory management.',
      problem: 'Building an e-commerce store requires handling complex inventory and payment workflows.',
      solution: 'Developed a robust system with real-time inventory tracking and secure payment processing.',
      learned: 'Payment gateway integration, inventory management, order processing, and state synchronization.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      color: 'from-purple-500 to-pink-500',
      link: '#',
      github: 'https://github.com/therealsaad',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Real-time messaging platform with instant notifications and presence awareness.',
      problem: 'Users want instant communication with typing indicators and live online status.',
      solution: 'Implemented WebSocket-based real-time communication with optimized data sync.',
      learned: 'WebSocket implementation, real-time state management, and handling concurrent connections.',
      tech: ['React', 'Firebase', 'Socket.io', 'Redux', 'Material-UI'],
      color: 'from-orange-500 to-red-500',
      link: '#',
      github: 'https://github.com/therealsaad',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Personal productivity tool with kanban board and progress tracking.',
      problem: 'Managing tasks across projects requires organization and real-time collaboration.',
      solution: 'Built a drag-and-drop kanban board with instant syncing and notifications.',
      learned: 'Drag-and-drop implementation, real-time database updates, and responsive animations.',
      tech: ['React', 'Firebase', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      color: 'from-pink-500 to-rose-500',
      link: '#',
      github: 'https://github.com/therealsaad',
    },
    {
      title: 'AI-Powered Content Generator',
      description: 'SaaS tool for generating SEO-optimized content with customizable parameters.',
      problem: 'Creating SEO content manually is time-consuming and requires expertise.',
      solution: 'Leveraged OpenAI API to create a smart content generator with custom controls.',
      learned: 'AI API integration, prompt engineering, usage analytics, and SaaS architecture.',
      tech: ['Next.js', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'Vercel'],
      color: 'from-indigo-500 to-purple-500',
      link: '#',
      github: 'https://github.com/therealsaad',
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
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-transparent via-purple-50/20 dark:via-purple-950/10 to-transparent"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Real-world applications and solutions</p>
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
              <div className="relative rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-gradient-to-br dark:from-slate-900/70 dark:to-slate-800/70 p-6 backdrop-blur-md h-full flex flex-col hover:border-blue-400 dark:hover:border-cyan-400/50 shadow-lg dark:shadow-none transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/20 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="p-2 rounded bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                      <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Problem</p>
                      <p className="text-red-600 dark:text-red-300">{project.problem}</p>
                    </div>
                    <div className="p-2 rounded bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                      <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Solution</p>
                      <p className="text-green-600 dark:text-green-300">{project.solution}</p>
                    </div>
                    <div className="p-2 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                      <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1">Learned</p>
                      <p className="text-blue-600 dark:text-blue-300">{project.learned}</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-300 dark:border-cyan-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white text-sm font-semibold hover:shadow-lg dark:hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-blue-300 dark:border-purple-500/50 text-blue-700 dark:text-purple-300 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-purple-500/10 transition-all duration-300"
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
