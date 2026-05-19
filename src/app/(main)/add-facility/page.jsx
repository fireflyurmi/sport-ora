"use client";

import React from "react";

const AddFacilityPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    console.log(facility);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center transition-colors duration-300 bg-blue-50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10 dark:border-slate-800/80 dark:bg-[#0D1527]">
        <div className="mb-8">
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white sm:text-3xl">
            Add New Facility
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Create and host a brand new sport venue turf inside SportOra.
          </p>
          <div className="mt-3 h-1 w-12 rounded-full bg-blue-600" />
        </div>

        {/* Requirements Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Facility Name */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Scorion Nest Arena"
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Facility Type (Select Dropdown) */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Type
              </label>
              <div className="relative">
                <select
                  name="facility_type"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none appearance-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500 text-slate-700 dark:text-slate-300"
                >
                  <option value="" disabled>
                    Select facility type
                  </option>
                  <option value="Football Turf" className="dark:bg-[#0D1527]">
                    Football Turf
                  </option>
                  <option value="Cricket Arena" className="dark:bg-[#0D1527]">
                    Cricket Arena
                  </option>
                  <option value="Badminton Court" className="dark:bg-[#0D1527]">
                    Badminton Court
                  </option>
                  <option
                    value="Basketball Court"
                    className="dark:bg-[#0D1527]"
                  >
                    Basketball Court
                  </option>
                  <option value="Tennis Turf" className="dark:bg-[#0D1527]">
                    Tennis Turf
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Price Per Hour */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Price Per Hour (USD)
              </label>
              <input
                name="price_per_hour"
                type="number"
                required
                placeholder="50"
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Location / Full Address
              </label>
              <input
                name="location"
                type="text"
                required
                placeholder="Block-E, Bashundhara R/A, Dhaka"
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Capacity */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Max Capacity (Players)
              </label>
              <input
                name="capacity"
                type="number"
                required
                placeholder="14"
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Available Slots */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Available Time Slots
              </label>
              <input
                name="available_slots"
                type="text"
                required
                placeholder="e.g. 06:00 PM - 10:00 PM"
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Description
              </label>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Provide details about the ground configurations, boots limitations, or premium configurations..."
                className="w-full px-4 py-3 rounded-3xl border bg-transparent text-sm transition-all outline-none resize-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Action Block */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 rounded-2xl shadow-md shadow-blue-500/10 dark:shadow-none transition-all active:scale-[0.99]"
            >
              Add New Facility
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacilityPage;
