'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LatestBlogs() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-heading text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
          Latest Blog Posts
        </h2>
        <div className="mt-1.5 h-0.75 w-12 rounded-full bg-blue-600" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        
        {/* Blog Post Card 1 */}
        <motion.article 
          whileHover={{ y: -4 }} 
          className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/80 dark:bg-[#0D1527]"
        >
          <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image 
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b" 
              alt="Safety Tips For Players" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="flex flex-col p-5 grow">
            <h3 className="font-heading text-base font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white line-clamp-1">
              Safety Tips For Players
            </h3>
            <p className="font-body mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
              Essential warmup routines, protective gear guidelines, and injury prevention strategies to ensure peak performance on the field.
            </p>
          </div>
        </motion.article>

        {/* Blog Post Card 2 */}
        <motion.article 
          whileHover={{ y: -4 }} 
          className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/80 dark:bg-[#0D1527]"
        >
          <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" 
              alt="Top Sports To Stay Fit" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="flex flex-col p-5 grow">
            <h3 className="font-heading text-base font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white line-clamp-1">
              Top Sports To Stay Fit
            </h3>
            <p className="font-body mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
              Discover high-intensity athletic activities that enhance cardiovascular endurance, build core agility, and boost your overall stamina.
            </p>
          </div>
        </motion.article>

        {/* Blog Post Card 3 */}
        <motion.article 
          whileHover={{ y: -4 }} 
          className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/80 dark:bg-[#0D1527]"
        >
          <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" 
              alt="Nutritional Guide For Athletes" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="flex flex-col p-5 grow">
            <h3 className="font-heading text-base font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white line-clamp-1">
              Nutritional Guide For Athletes
            </h3>
            <p className="font-body mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
              Optimize your meal planning with professional macro breakdowns, hydration tactics, and efficient recovery food options.
            </p>
          </div>
        </motion.article>

      </div>
    </section>
  );
}