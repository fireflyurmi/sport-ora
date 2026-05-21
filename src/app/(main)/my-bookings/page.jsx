"use client";

import React, { useState, useCallback } from "react";
import { authClient } from "@/lib/auth-client";
import BookingCancelAlert from "@/components/BookingCancelAlert";

const MyBookingsPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchedEmail, setLastFetchedEmail] = useState(null);

  const userEmail = session?.user?.email;

  const fetchBookings = useCallback(async (email) => {
    if (!email) return;
    try {
      const token = localStorage.getItem("token") || session?.token;

      const res = await fetch(`http://localhost:5000/bookings/${email}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [session]);

  if (!isPending && userEmail && lastFetchedEmail !== userEmail) {
    setLastFetchedEmail(userEmail);
    fetchBookings(userEmail);
  }

  const isDataLoading = isPending || (userEmail ? loading : false);

  if (isDataLoading) {
    return (
      <div className="py-20 flex items-center justify-center bg-blue-50 dark:bg-[#080F1A]">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white sm:text-3xl">
            My Bookings
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            View and manage your reserved time slots across sport venues.
          </p>
          <div className="mt-3 h-1 w-12 rounded-full bg-blue-600" />
        </div>

        {bookings.length === 0 ? (
          <div className="w-full bg-white dark:bg-[#0D1527] p-10 text-center text-sm text-slate-400 dark:text-slate-500 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-xl">
            No facility booking records found.
          </div>
        ) : (
          <>
            {/* MOBILE LAYOUT */}
            <div className="block md:hidden space-y-4">
              {bookings.map((booking) => (
                <div 
                  key={booking._id} 
                  className="bg-white dark:bg-[#0D1527] border border-slate-100 dark:border-slate-800/80 rounded-2xl p-5 shadow-md space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">
                        {booking.facilityName}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {booking.bookingDate}
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide
                      ${booking.status === "pending" ? "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400" : ""}
                      ${booking.status === "confirmed" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : ""}
                    `}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/40">
                    <div>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#080F1A] text-xs font-medium mr-2">
                        {booking.timeSlot}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        ${Number(booking.totalPrice).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <BookingCancelAlert 
                        bookingId={booking._id} 
                        onCancelSuccess={() => fetchBookings(userEmail)} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:block w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl dark:border-slate-800/80 dark:bg-[#0D1527]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/70 dark:bg-[#0f192e]">
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Facility Name
                      </th>
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Booking Date
                      </th>
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Time Slot
                      </th>
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Price
                      </th>
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Status
                      </th>
                      <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                    {bookings.map((booking) => (
                      <tr key={booking._id} className="hover:bg-slate-50/40 dark:hover:bg-[#121b30] transition-colors">
                        <td className="p-5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {booking.facilityName}
                        </td>
                        <td className="p-5 text-sm text-slate-600 dark:text-slate-300">
                          {booking.bookingDate}
                        </td>
                        <td className="p-5 text-sm text-slate-600 dark:text-slate-300">
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#080F1A] text-xs font-medium">
                            {booking.timeSlot}
                          </span>
                        </td>
                        <td className="p-5 text-sm font-bold text-blue-600 dark:text-blue-400">
                          ${Number(booking.totalPrice).toFixed(2)}
                        </td>
                        <td className="p-5 text-sm">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                            ${booking.status === "pending" ? "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400" : ""}
                            ${booking.status === "confirmed" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : ""}
                          `}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="p-5 text-sm text-right">
                          <BookingCancelAlert 
                            bookingId={booking._id} 
                            onCancelSuccess={() => fetchBookings(userEmail)} 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;