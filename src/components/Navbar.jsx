"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isLoggedIn = true;
  const user = {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  };

  return (
    <nav className="w-full border-b transition-colors duration-300 bg-white border-slate-100 text-slate-800 dark:bg-[#0B1528] dark:border-slate-800/80 dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
              <span className="text-white font-black text-xl italic tracking-tighter">
                S
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              Sport<span className="text-blue-500">Ora</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-blue-500 border-b-2 border-blue-500 py-1 px-1"
            >
              Home
            </Link>
            <Link
              href="/all-facilities"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
            >
              All Facilities
            </Link>

            {isLoggedIn && (
              <>
                <Link
                  href="/add-facility"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Add Facility
                </Link>
                <Link
                  href="/my-bookings"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
                >
                  My Bookings
                </Link>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Manage Facilities
                </Link>
              </>
            )}
          </div>

          {/* Action Hub */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm transition-all border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="font-medium text-xs max-w-20 truncate">
                    {user.name}
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
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
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-xl border shadow-xl py-2 z-50 bg-white border-slate-100 text-slate-700 dark:bg-[#0F1C34] dark:border-slate-800 dark:text-slate-200">
                    <Link
                      href="/my-bookings"
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/add-facility"
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      Add Facility
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      Manage Facilities
                    </Link>
                    <hr className="my-1 border-slate-100 dark:border-slate-800" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95">
                Login
              </button>
            )}
          </div>

          {/* Mobile Buttons Layout */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden border-t px-4 pt-2 pb-6 space-y-2 font-medium text-sm bg-white border-slate-100 dark:bg-[#0B1528] dark:border-slate-800">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg bg-blue-500 text-white"
          >
            Home
          </Link>
          <Link
            href="/all-facilities"
            className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            All Facilities
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/add-facility"
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Add Facility
              </Link>
              <Link
                href="/my-bookings"
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                My Bookings
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Manage Facilities
              </Link>
              <hr className="my-2 border-slate-100 dark:border-slate-800" />
              <button className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg">
                Logout
              </button>
            </>
          ) : (
            <div className="pt-2">
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-center">
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
