"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const BookingCard = ({ facilityId, facilityName, pricePerHour }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [bookingHours, setBookingHours] = useState(1);

  const hourlyRate = Number(pricePerHour) || 0;
  const totalPrice = hourlyRate * Number(bookingHours);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const bookingPayload = {
      facilityId,
      facilityName,
      bookingDate,
      timeSlot,
      hours: Number(bookingHours),
      totalPrice: totalPrice,
      status: "pending",
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Booking Submitted!",
          text: "Your reservation is pending confirmation.",
          timer: 2000,
          showConfirmButton: false,
          background: document.documentElement.classList.contains("dark")
            ? "#0D1527"
            : "#ffffff",
          color: document.documentElement.classList.contains("dark")
            ? "#ffffff"
            : "#1e293b",
          customClass: {
            popup:
              "rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl",
          },
        });
        router.push("/dashboard/my-bookings");
      } else {
        throw new Error("Submission rejected.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "Could not dispatch reservation properties.",
        background: document.documentElement.classList.contains("dark")
          ? "#0D1527"
          : "#ffffff",
        color: document.documentElement.classList.contains("dark")
          ? "#ffffff"
          : "#1e293b",
        customClass: {
          popup:
            "rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0D1527] p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-lg dark:shadow-2xl lg:sticky lg:top-8 transition-colors duration-300">
      <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
        Let&apos;s Book
      </h2>

      <form
        onSubmit={handleBookingSubmit}
        className="space-y-4 text-slate-700 dark:text-slate-200"
      >
        {/* Facility Name */}
        <div>
          <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
          Facility Name
          </label>
          <input
            type="text"
            value={facilityName || ""}
            disabled
            className="w-full px-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-[#080F1A] text-sm text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed font-medium transition-colors duration-300"
          />
        </div>

        {/* Booking Date */}
        <div>
          <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Booking Date
          </label>
          <input
            type="date"
            required
            value={bookingDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-[#080F1A] text-sm text-slate-800 dark:text-white outline-none border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Time Slot
          </label>
          <select
            required
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-[#080F1A] text-sm outline-none border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 text-slate-700 dark:text-slate-300 transition-colors duration-300"
          >
            <option value="" className="bg-white dark:bg-[#0D1527]">
              Select a time slot
            </option>
            <option
              value="08:00 AM - 10:00 AM"
              className="bg-white dark:bg-[#0D1527]"
            >
              08:00 AM - 10:00 AM
            </option>
            <option
              value="10:00 AM - 12:00 PM"
              className="bg-white dark:bg-[#0D1527]"
            >
              10:00 AM - 12:00 PM
            </option>
            <option
              value="12:00 PM - 02:00 PM"
              className="bg-white dark:bg-[#0D1527]"
            >
              12:00 PM - 02:00 PM
            </option>
            <option
              value="02:00 PM - 04:00 PM"
              className="bg-white dark:bg-[#0D1527]"
            >
              02:00 PM - 04:00 PM
            </option>
            <option
              value="04:00 PM - 06:00 PM"
              className="bg-white dark:bg-[#0D1527]"
            >
              04:00 PM - 06:00 PM
            </option>
            <option
              value="06:00 PM - 08:00 PM"
              className="bg-white dark:bg-[#0D1527]"
            >
              06:00 PM - 08:00 PM
            </option>
          </select>
        </div>

        {/* Booking Hours */}
        <div>
          <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Hours
          </label>
          <input
            type="number"
            min="1"
            required
            value={bookingHours}
            onChange={(e) =>
              setBookingHours(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-[#080F1A] text-sm text-slate-800 dark:text-white outline-none border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Price */}
        <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/60 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold text-slate-400 dark:text-slate-500">
              Rate
            </span>
            <span className="font-semibold text-slate-600 dark:text-slate-300">
              ${hourlyRate}/hr
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Total Price
            </span>
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
