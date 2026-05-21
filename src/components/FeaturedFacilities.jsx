"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BallTriangle } from "react-loader-spinner";
import { FiMapPin } from "react-icons/fi";

export default function FeaturedFacilities() {
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedFacilities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/facility");
        const data = await res.json();

        // Safe Check: Verify data is actually an array before slicing
        if (Array.isArray(data)) {
          // Take a minimum/slice of 6 items for the featured grid section
          setFacilities(data.slice(0, 6));
        } else {
          console.warn("Expected an array from /facility but received:", data);
          setFacilities([]);
        }
      } catch (error) {
        console.error("Error fetching featured facilities:", error);
        setFacilities([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedFacilities();
  }, []);

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Featured Facilities
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-blue-600" />
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="min-h-[30vh] w-full flex flex-col justify-center items-center">
          <BallTriangle
            height={80}
            width={80}
            radius={5}
            color="#2563eb"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
          <p className="mt-4 text-xs font-medium text-slate-400 dark:text-slate-500 animate-pulse">
            Loading brilliant facilities...
          </p>
        </div>
      ) : facilities.length === 0 ? (
        /* Empty State */
        <div className="text-center py-12 bg-white dark:bg-[#0D1527] rounded-3xl border border-slate-100 dark:border-slate-800/80 p-8 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
            No featured sports facilities available right now.
          </p>
        </div>
      ) : (
        /* Dynamic Grid Layout */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility._id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#0F1C34] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card Header Media */}
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={
                      facility.image ||
                      "https://images.unsplash.com/photo-1540747737956-37872a7e5292?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={facility.name}
                    fill
                    sizes="(max-w-768px) 100vw, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {facility.facility_type && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md z-10">
                      {facility.facility_type}
                    </span>
                  )}
                </div>

                {/* Card Main Information */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white truncate">
                    {facility.name}
                  </h3>

                  {/* Location Segment */}
                  <div className="flex items-center gap-1 mt-1.5 text-slate-500 dark:text-slate-400">
                    <FiMapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <p className="text-xs truncate">{facility.location}</p>
                  </div>

                  {/* Short Description snippet */}
                  {facility.description && (
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {facility.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action and Pricing Footer (Pinned perfectly to bottom) */}
              <div className="px-5 pb-5">
                <div className="mt-2 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800/60">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Hourly Rate
                    </span>
                    <span className="text-xl font-black text-slate-900 dark:text-white">
                      ${facility.price_per_hour}
                    </span>
                  </div>

                  <Link
                    href={`/all-facilities/${facility._id}`}
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}