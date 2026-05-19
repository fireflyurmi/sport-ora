"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function FeaturedFacilities() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Featured Facilities
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-blue-600" />
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
              alt="City Football Turf"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              City Football Turf
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              Downtown Stadium Complex
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $23.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80"
              alt="Elite Badminton Court"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              Elite Badminton Court
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              Indoor Arena Center
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $73.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
              alt="Aqua Swim Center"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              Aqua Swim Center
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              Olympic Training Pool
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $23.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
              alt="Pro Tennis Court"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              Pro Tennis Court
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              Grandslam Sports Park
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $35.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
              alt="Hardwood Basketball Court"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              Hardwood Basketball Court
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              Metro Youth Hub
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $45.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80"
              alt="Champ Cricket Net"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
              Champ Cricket Net
            </h3>
            <p className="font-body mt-1 text-xs text-slate-500 dark:text-slate-400">
              National Sports Academy
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Hourly Rate
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  $30.00
                </span>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}