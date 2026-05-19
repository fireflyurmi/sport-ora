"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white dark:border-slate-800/60 dark:bg-[#0D1527]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 text-center sm:text-left md:flex-row md:justify-between md:items-start">

          <div className="flex flex-col items-center sm:items-start gap-3 max-w-sm">
            <Link href="/" className="font-heading text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Sport<span className="text-blue-600">Ora</span>
            </Link>
            <p className="font-body text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              The premier marketplace for athletes and team managers to search, check hourly rates, and book local stadium centers securely.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase">
              Contact Us
            </h4>
            <ul className="font-body flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Email:</span> support@sportora.com
              </li>
              <li>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Phone:</span> +1 (555) 019-2834
              </li>
              <li>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Address:</span> 452 Stadium Way, Downtown Complex
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase">
              Follow Us
            </h4>
            <div className="mt-1 flex gap-5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow SportNest on Facebook"
                className="text-slate-400 text-lg transition-colors hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-500"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow SportNest on Twitter"
                className="text-slate-400 text-lg transition-colors hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-500"
              >
                <FaXTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow SportNest on Instagram"
                className="text-slate-400 text-lg transition-colors hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Footer Subline */}
        <div className="mt-12 border-t border-slate-100 pt-6 text-center dark:border-slate-800/60">
          <p className="font-body text-xs text-slate-400 dark:text-slate-500">
            &copy; {currentYear} SportNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}