'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/use-intersection-observer';
import { Code, Zap, Rocket, Target } from 'lucide-react';

export function CodingJourney() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const journeyStages = [
    {
      stage: 'Beginner',
      icon: Code,
      period: '2020-2021',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-500/10',
      borderColor: 'border-orange-200 dark:border-orange-500/30',
      textColor: 'text-orange-700 dark:text-orange-300',
      description: 'Started learning HTML, CSS, and JavaScript from scratch. Built my first projects and fell in love with web development.',
      milestones: ['First "Hello World"', 'Built personal website', 'Learned JavaScript fundamentals', 'First freelance projects']
    },
    {
      stage: 'Learning',
      icon: Zap,
      period: '2022-2023',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
      textColor: 'text-purple-700 dark:text-purple-300',
      description: 'Mastered React, Node.js, and MongoDB. Started understanding how full-stack applications work.',
      milestones: ['React fundamentals', 'Backend with Node.js', 'Database design with MongoDB', 'API development']
    },
    {
      stage: 'Growing',
      icon: Target,
      period: '2023-2024',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
      textColor: 'text-blue-700 dark:text-blue-300',
      description: 'Advanced full-stack development with Next.js, Supabase, and Firebase. Taking on freelance projects.',
      milestones: ['Next.js expertise', 'Firebase integration', 'Supabase mastery', 'Freelance projects']
    },
    {
      stage: 'Building',
      icon: Rocket,
      period: '2024+',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-500/10',
      borderColor: 'border-green-200 dark:border-green-500/30',
      textColor: 'text-green-700 dark:text-green-300',
      description: 'Building real-world products. Exploring AI integration, DevOps, and system design.',
      milestones: ['AI integrations', 'Production deployments', 'Scaling applications', 'Mentoring others']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      id="journey"
      className="py-20 px-4 relative bg-gradient-to-b from-transparent via-orange-50/20 dark:via-orange-950/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">Coding Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From zero to building production-ready applications. Here&apos;s my learning path.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {journeyStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.stage}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  className={`${stage.bgColor} border ${stage.borderColor} rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 relative overflow-hidden h-full`}
                >
                  {/* Background decoration */}
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br ${stage.color} rounded-full blur-3xl opacity-10 pointer-events-none`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${stage.color} text-white`}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div>
                        <h3 className={`text-2xl font-bold ${stage.textColor} mb-1`}>
                          {stage.stage}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                          {stage.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Milestones */}
                    <div className="space-y-2">
                      <h4 className={`text-sm font-semibold ${stage.textColor}`}>
                        Key Milestones:
                      </h4>
                      <ul className="space-y-2">
                        {stage.milestones.map((milestone, mIdx) => (
                          <motion.li
                            key={milestone}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: idx * 0.1 + mIdx * 0.05 }}
                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${stage.color}`} />
                            {milestone}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Every day is a step forward. Still learning, always growing! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
