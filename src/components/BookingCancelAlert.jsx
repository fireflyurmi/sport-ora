"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const TrashBin = () => (
  <svg
    className="w-4 h-4 mr-1.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const BookingCancelAlert = ({ bookingId, onCancelSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCancelBooking = async () => {
    try {
      setIsSubmitting(true);

      const { data: tokenData } = await authClient.token();

      const serverUri = process.env.NEXT_PUBLIC_SERVER_URI;

      const res = await fetch(`${serverUri}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData?.token}`,
        },
      });

      if (res.ok) {
        toast.success("Booking cancelled successfully.");
        setIsOpen(false);
        if (onCancelSuccess) onCancelSuccess();
      } else {
        toast.error("Failed to cancel booking entry.");
      }
    } catch (error) {
      console.error("Cancellation error:", error);
      toast.error("An error occurred during cancellation processing.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inline-block">
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-3 py-1.5 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 hover:bg-red-50 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold transition-all active:scale-[0.98]"
      >
        <TrashBin />
        Cancel
      </button>

      {/* Alert Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white dark:bg-[#0D1527] p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl transition-all scale-100 text-left">
            <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
              Are you absolutely sure?
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              This action cannot be undone. This will permanently cancel your
              slot reservation at the venue.
            </p>

            <div className="mt-6 flex items-center justify-end space-x-3">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-colors disabled:opacity-50"
              >
                Go Back
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleCancelBooking}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/10 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? "Cancelling..." : "Yes, Cancel Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCancelAlert;
