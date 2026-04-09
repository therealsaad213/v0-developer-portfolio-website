'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'Web Architect', 'Creative Technologist', 'Problem Solver'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-blue-50/20 dark:from-slate-950 dark:via-blue-950/10 to-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 dark:bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-0 w-96 h-96 bg-purple-500 dark:bg-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-blue-500 dark:border-cyan-400 overflow-hidden shadow-2xl dark:shadow-cyan-500/30 hover:shadow-3xl transition-shadow"
          >
            <Image
              src="/logo.jpg"
              alt="Shaikh Saad"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Shaikh Saad
        </motion.h1>

        <motion.div
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="h-12 mb-8"
        >
          <p className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">
            {roles[roleIndex]}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting beautiful, scalable web applications with modern technologies. Specialized in Full-Stack development using React, Node.js, Next.js, and Firebase. Let&apos;s build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            href="#projects"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold hover:shadow-lg dark:hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 font-semibold hover:bg-blue-50 dark:hover:bg-cyan-500/10 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-4 text-sm"
        >
          <a
            href="https://github.com/therealsaad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-400">•</span>
          <a
            href="https://www.linkedin.com/in/therealsaad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-400">•</span>
          <a
            href="mailto:therealsaad03@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
      </motion.div>
    </section>
  );
}
