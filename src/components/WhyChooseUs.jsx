import React from "react";
import { FaRegCalendarCheck, FaRegStar, FaHeadset } from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Clean Header */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-xl sm:text-2xl font-black text-[#1E293B] dark:text-white tracking-tight">
          Why Choose Us?
        </h2>
        <div className="w-8 h-0.75 bg-blue-600 rounded-full mx-auto mt-1.5" />
      </div>

      {/* Pure Server Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white dark:bg-[#0D1527] border border-slate-100 dark:border-slate-800/80 rounded-full py-3 px-6 shadow-xs max-w-5xl mx-auto items-center">
        {/* Item 1 - Easy Booking */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1 transition-transform duration-300 hover:scale-105">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0 text-sm">
            <FaRegCalendarCheck />
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            Easy Booking
          </span>
        </div>

        {/* Item 2 - Top Facilities */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1 border-t md:border-t-0 md:border-x border-slate-100 dark:border-slate-800/60 transition-transform duration-300 hover:scale-105">
          <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-xs shrink-0 text-sm">
            <FaRegStar />
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            Top Facilities
          </span>
        </div>

        {/* Item 3 - 24/7 Support */}
        <div className="flex items-center justify-center gap-3 py-2 md:py-1 border-t md:border-t-0 border-slate-100 dark:border-slate-800/60 transition-transform duration-300 hover:scale-105">
          <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-xs shrink-0 text-sm">
            <FaHeadset />
          </div>
          <span className="font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
}
