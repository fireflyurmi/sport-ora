'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-15, 0, -15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const lineVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100 font-body transition-colors duration-300 px-4 overflow-hidden">
      
      {/* Central Card Block */}
      <motion.div
        className="text-center flex flex-col items-center z-10 max-w-xl w-full"
        variants={floatVariants}
        initial="initial"
        animate="animate"
      >
        <div className="relative mb-6 w-max select-none">
          <h1 className="font-heading text-[160px] sm:text-[200px] leading-none font-extrabold tracking-tight text-slate-200 dark:text-slate-800/40">
            404
          </h1>
          
          <motion.svg
            className="absolute inset-0 w-full h-full text-cyan-500 scale-110"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={lineVariants}
            initial="animate"
            animate="animate"
          >
            <line x1="20" y1="180" x2="20" y2="40" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
            <line x1="380" y1="180" x2="380" y2="40" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
            <motion.path
              d="M20 40 C 60 80, 100 40, 140 100 S 180 60, 220 120 S 260 80, 300 140 S 340 100, 380 140"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              className="drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]"
            />
            <circle cx="200" cy="180" r="15" fill="none" stroke="white" strokeWidth="6" strokeDasharray="6 6"/>
            <line x1="160" y1="60" x2="190" y2="90" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
            <line x1="230" y1="110" x2="260" y2="140" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
          </motion.svg>
        </div>
        <h2 className="font-heading text-5xl sm:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
          Offside!
        </h2>
        <p className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-slate-700 dark:text-slate-300 mt-1">
          Venue Not Found
        </p>

        <p className="font-body text-sm sm:text-base font-normal max-w-md mt-4 text-slate-600 dark:text-slate-400 px-2">
          Looks like we&apos;ve strayed out of bounds. The sports facility or page you&apos;re searching for isn&apos;t here. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 justify-center">
          <Link 
            href="/" 
            className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-bold text-center text-sm uppercase tracking-wide shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Return to the Field
          </Link>
          <Link 
            href="/" 
            className="border-2 border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300 px-8 py-3.5 rounded-xl font-bold text-center text-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800/50 uppercase tracking-wide"
          >
            Back Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}