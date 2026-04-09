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
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-slate-900 dark:text-white leading-tight"
        >
          I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-pulse">Shaikh Saad</span> 
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
          
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-3">
            Self-taught MERN stack developer building real-world projects and growing every day.
          </p>
          <p className="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-semibold italic">
            Started from zero, now building my own path in tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-cyan-500 dark:via-purple-500 dark:to-blue-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg border-2 border-purple-600 dark:border-cyan-400 text-purple-600 dark:text-cyan-400 font-semibold hover:bg-purple-50 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>
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
