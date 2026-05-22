"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BallTriangle } from "react-loader-spinner";
import {
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiClock,
  FiUsers,
} from "react-icons/fi";

const AllFacilitiesPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  useEffect(() => {
    const fetchFacilities = async () => {
      setIsDataLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.append("search", searchQuery);
        
        if (selectedSport) params.append("sportType", selectedSport);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/facility?${params.toString()}`,
        );
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setFacilities(data);
        } else {
          console.warn("Expected an array from /facility but received:", data);
          setFacilities([]); 
        }
      } catch (error) {
        console.error("Error fetching facilities:", error);
        setFacilities([]);
      } finally {
        setIsDataLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchFacilities();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, selectedSport]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-blue-50/50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white sm:text-4xl">
              All Facilities
            </h1>
            <div className="mt-2 h-1 w-16 rounded-full bg-blue-600" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Search Input Field */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search facility name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border bg-white dark:bg-[#0D1527] text-sm outline-none transition-all border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
              <FiSearch className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Filter Dropdown Selection */}
            <div className="relative w-full sm:w-56">
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-2xl border bg-white dark:bg-[#0D1527] text-sm outline-none appearance-none transition-all border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500 text-slate-700 dark:text-slate-300"
              >
                <option value="">All Sport Types</option>
                <option value="Football Turf">Football Turf</option>
                <option value="Badminton Court">Badminton Court</option>
                <option value="Swim Center">Swim Center</option>
                <option value="Tennis Court">Tennis Court</option>
                <option value="Basketball Court">Basketball Court</option>
                <option value="Cricket Net">Cricket Net</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <FiChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {isDataLoading ? (
          <div className="min-h-[50vh] w-full flex flex-col justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#2563eb"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
            <p className="mt-4 text-xs font-medium text-slate-400 dark:text-slate-500 animate-pulse">
              Filtering facilities...
            </p>
          </div>
        ) : facilities.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#0D1527] rounded-3xl border border-slate-100 dark:border-slate-800/80 p-8 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
              No sports facilities match your criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {facilities.map((facility) => (
              <div
                key={facility._id}
                className="group flex flex-col lg:flex-row items-center gap-6 p-5 sm:p-6 bg-white dark:bg-[#0D1527] rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:border-slate-700/60"
              >
                <div className="w-full lg:w-72 h-48 lg:h-44 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#080F1A] relative shrink-0">
                  <Image
                    src={
                      facility.image ||
                      "https://images.unsplash.com/photo-1540747737956-37872a7e5292?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={facility.name}
                    fill
                    sizes="(max-w-768px) 100vw, 288px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={true}
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
                    {facility.facility_type}
                  </span>
                </div>

                {/* Facility Details */}
                <div className="w-full flex-1 flex flex-col justify-between min-w-0 py-1">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {facility.name}
                      </h2>
                      <div className="text-right shrink-0">
                        <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                          ${facility.price_per_hour}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 ml-1">
                          / hour
                        </span>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-3">
                      <FiMapPin className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="truncate">{facility.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#080F1A] px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <FiClock className="w-4 h-4 text-slate-400" />
                        <span>
                          Slots:{" "}
                          <strong className="text-slate-700 dark:text-slate-200">
                            {facility.available_slots}
                          </strong>
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#080F1A] px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <FiUsers className="w-4 h-4 text-slate-400" />
                        <span>
                          Capacity:{" "}
                          <strong className="text-slate-700 dark:text-slate-200">
                            {facility.capacity} Players
                          </strong>
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/all-facilities/${facility._id}`}
                      className="w-full text-center sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-500/10 transition-all active:scale-[0.98] block"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
export const dynamic = 'force-dynamic';