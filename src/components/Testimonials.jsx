"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-xl font-black tracking-tight text-slate-800 sm:text-2xl dark:text-white">
          User Testimonials
        </h2>
        <div className="mx-auto mt-1.5 h-0.75 w-8 rounded-full bg-blue-600" />
      </div>

      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800/80 dark:bg-[#0D1527]">
        <div className="flex min-h-25 w-full items-center">
          <AnimatePresence mode="wait">
        
            {active === 0 && (
              <motion.div
                key="t1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
              >
                <div className="relative h-20 w-20 shrink-0 rounded-full border-2 border-blue-500/30 bg-slate-50 p-1 overflow-hidden dark:bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    alt="Sarah M."
                    fill
                    className="rounded-full object-cover p-1"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-body text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                    &quot;Booking court venues via SportNest has transformed how
                    our team sets up weekly tournaments. The dark mode dashboard
                    integration is amazingly clean, responsive, and completely
                    lag-free!&quot;
                  </p>
                  <h4 className="font-heading mt-2 text-sm font-black text-slate-900 dark:text-white">
                    Sarah M.
                  </h4>
                </div>
              </motion.div>
            )}

            {active === 1 && (
              <motion.div
                key="t2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
              >
                <div className="relative h-20 w-20 shrink-0 rounded-full border-2 border-blue-500/30 bg-slate-50 p-1 overflow-hidden dark:bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
                    alt="Alex J."
                    fill
                    className="rounded-full object-cover p-1"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-body text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                    &quot;Finding available turfs on Friday nights used to be a
                    nightmare. Now I can easily crosscheck hourly rates and book
                    local stadium centers securely within just two clicks.&quot;
                  </p>
                  <h4 className="font-heading mt-2 text-sm font-black text-slate-900 dark:text-white">
                    Alex Johnson
                  </h4>
                </div>
              </motion.div>
            )}

            {active === 2 && (
              <motion.div
                key="t3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
              >
                <div className="relative h-20 w-20 shrink-0 rounded-full border-2 border-blue-500/30 bg-slate-50 p-1 overflow-hidden dark:bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
                    alt="David K."
                    fill
                    className="rounded-full object-cover p-1"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-body text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                    &quot;Top tier venue booking service! The automatic
                    confirmation routines save our independent league immense
                    overhead work. High quality visuals on both screens.&quot;
                  </p>
                  <h4 className="font-heading mt-2 text-sm font-black text-slate-900 dark:text-white">
                    David K.
                  </h4>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Pagination Slider Dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <button
          onClick={() => setActive(0)}
          aria-label="Go to slide 1"
          className={`h-2 rounded-full transition-all duration-300 ${active === 0 ? "w-6 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
        />
        <button
          onClick={() => setActive(1)}
          aria-label="Go to slide 2"
          className={`h-2 rounded-full transition-all duration-300 ${active === 1 ? "w-6 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
        />
        <button
          onClick={() => setActive(2)}
          aria-label="Go to slide 3"
          className={`h-2 rounded-full transition-all duration-300 ${active === 2 ? "w-6 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
        />
      </div>
    </section>
  );
}
