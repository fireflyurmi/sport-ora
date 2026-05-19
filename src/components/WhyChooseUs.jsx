"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Clean Header */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-xl sm:text-2xl font-black text-[#1E293B] dark:text-white tracking-tight">
          Why Choose Us?
        </h2>
        <div className="w-8 h-[3px] bg-blue-600 rounded-full mx-auto mt-1.5" />
      </div>

      {/* Pill Container Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white dark:bg-[#0D1527] border border-slate-100 dark:border-slate-800/80 rounded-full py-3 px-6 shadow-xs max-w-5xl mx-auto items-center">
        {/* Item 1 - Easy Booking */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            Easy Booking
          </span>
        </div>

        {/* Item 2 - Top Facilities (With middle borders for desktop layout) */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1 border-t md:border-t-0 md:border-x border-slate-100 dark:border-slate-800/60">
          <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-xs shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            Top Facilities
          </span>
        </div>

        {/* Item 3 - 24/7 Support */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1 border-t md:border-t-0 border-slate-100 dark:border-slate-800/60">
          <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-xs shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
}
