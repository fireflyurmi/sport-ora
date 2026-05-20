"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ← Added
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const pathname = usePathname(); // ← Current route
  const { data: session, isPending } = authClient.useSession();

  const isLoggedIn = !!session?.user;
  const user = session?.user;

  const defaultAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

  useEffect(() => {
  }, [session]);

  const handleLogout = async () => {
    await authClient.signOut();
    setIsProfileOpen(false);
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="w-full border-b transition-colors duration-300 bg-white border-slate-100 text-slate-800 dark:bg-[#0B1528] dark:border-slate-800/80 dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
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
              className={`py-1 px-1 transition-colors ${isActive("/") ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 dark:text-slate-300 hover:text-blue-500"}`}
            >
              Home
            </Link>
            <Link
              href="/all-facilities"
              className={`py-1 px-1 transition-colors ${isActive("/all-facilities") ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 dark:text-slate-300 hover:text-blue-500"}`}
            >
              All Facilities
            </Link>
            <Link
              href="/my-bookings"
              className={`py-1 px-1 transition-colors ${isActive("/my-bookings") ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 dark:text-slate-300 hover:text-blue-500"}`}
            >
              My Bookings
            </Link>
            <Link
              href="/add-facility"
              className={`py-1 px-1 transition-colors ${isActive("/add-facility") ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 dark:text-slate-300 hover:text-blue-500"}`}
            >
              Add Facility
            </Link>
            <Link
              href="/manage-facilities"
              className={`py-1 px-1 transition-colors ${isActive("/manage-facilities") ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 dark:text-slate-300 hover:text-blue-500"}`}
            >
              Manage My Facilities
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />

            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
            ) : isLoggedIn && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm transition-all border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <Image
                    src={user.image || defaultAvatar}
                    alt={user.name || "Profile"}
                    width={32}
                    height={32}
                    className="rounded-full object-cover ring-2 ring-white dark:ring-slate-700"
                    unoptimized
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
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/add-facility"
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Add Facility
                    </Link>
                    <Link
                      href="/manage-facilities"
                      className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Manage My Facilities
                    </Link>
                    <hr className="my-1 border-slate-100 dark:border-slate-800" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-5 py-2 text-sm font-semibold hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white dark:bg-[#0B1528] border-slate-100 dark:border-slate-800 px-4 py-6 space-y-4">
          {isLoggedIn && user && (
            <div className="flex items-center gap-3 px-3 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <Image
                src={user.image || defaultAvatar}
                alt={user.name || "User"}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-white dark:border-slate-700"
                unoptimized
              />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          )}

          <Link
            href="/"
            className={`block px-3 py-2.5 rounded-lg ${isActive("/") ? "bg-blue-500 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/all-facilities"
            className={`block px-3 py-2.5 rounded-lg ${isActive("/all-facilities") ? "bg-blue-500 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            onClick={() => setIsOpen(false)}
          >
            All Facilities
          </Link>

          {isLoggedIn && (
            <>
              <Link
                href="/my-bookings"
                className={`block px-3 py-2.5 rounded-lg ${isActive("/my-bookings") ? "bg-blue-500 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                onClick={() => setIsOpen(false)}
              >
                My Bookings
              </Link>
              <Link
                href="/add-facility"
                className={`block px-3 py-2.5 rounded-lg ${isActive("/add-facility") ? "bg-blue-500 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                onClick={() => setIsOpen(false)}
              >
                Add Facility
              </Link>
              <Link
                href="/manage-facilities"
                className={`block px-3 py-2.5 rounded-lg ${isActive("/manage-facilities") ? "bg-blue-500 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                onClick={() => setIsOpen(false)}
              >
                Manage My Facilities
              </Link>
            </>
          )}

          <hr className="border-slate-200 dark:border-slate-700" />

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-3 text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg font-medium"
            >
              Logout
            </button>
          ) : (
            <div className="space-y-3 pt-2">
              <Link
                href="/login"
                className="block w-full text-center py-3 border border-slate-300 dark:border-slate-700 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
