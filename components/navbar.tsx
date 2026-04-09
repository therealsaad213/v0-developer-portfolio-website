'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo with Professional Photo */}
        <Link href="#" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 dark:border-cyan-400 shadow-lg dark:shadow-cyan-500/30 hover:shadow-xl dark:hover:shadow-cyan-500/50 transition-all"
          >
            <Image
              src="/logo.jpg"
              alt="Shaikh Saad"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          <div className="hidden sm:block">
            <div className="font-bold text-slate-900 dark:text-white">Saad</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Full Stack Dev</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors relative group text-sm font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          )}

          <Link
            href="#contact"
            className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white text-sm font-semibold hover:shadow-lg dark:hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800/50"
      >
        <div className="px-4 sm:px-6 py-4 space-y-3 bg-slate-50 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white text-sm font-semibold mt-4"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
