import React from "react";
import Image from "next/image";
import BookingCard from "@/components/BookingCard";
import { FaLocationDot } from "react-icons/fa6";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  let facility = null;
  try {
    const res = await fetch(`http://localhost:5000/facility/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      facility = await res.json();
    }
  } catch (error) {
    console.error("Error reading facility database document:", error);
  }

  if (!facility) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#080F1A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <div className="text-center p-8 bg-white dark:bg-[#0D1527] rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
            Facility profile layout not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] dark:bg-[#080F1A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Header Banner Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Facility Details & Booking
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Info Frame */}
          <div className="lg:col-span-2 space-y-6 bg-white dark:bg-[#0D1527] p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-lg dark:shadow-2xl transition-colors duration-300">
            <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#080F1A] relative shadow-inner">
              <Image
                src={
                  facility?.image
                }
                alt={facility?.name}
                fill
                sizes="(max-w-1024px) 100vw, 700px"
                className="object-cover"
                priority={true}
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
                {facility?.facility_type}
              </span>
            </div>

            {/* Profile Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {facility.name}
              </h2>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex items-center gap-2">
                <FaLocationDot className="text-pink-600 shrink-0 text-base" />
                <span>{facility?.location}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                Description
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {facility?.description}
              </p>

              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="bg-slate-50 dark:bg-[#080F1A] p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Available Slots
                  </span>
                  <span className="font-medium">
                    {facility?.available_slots}
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-[#080F1A] p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Venue Capacity
                  </span>
                  <span className="font-medium">
                    {facility?.capacity} Players Max
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-[#080F1A] p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Sport Category
                  </span>
                  <span className="font-medium">{facility?.facility_type}</span>
                </div>

                <div className="bg-slate-50 dark:bg-[#080F1A] p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Price
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    ${facility?.price_per_hour} / hour
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-xs text-slate-400 dark:text-slate-500">
                <span>Owner: {facility?.owner_email}</span>
              </div>
            </div>
          </div>
          <div>
            <BookingCard
              facilityId={facility?._id}
              facilityName={facility?.name}
              pricePerHour={facility?.price_per_hour}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
