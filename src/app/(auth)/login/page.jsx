"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password");
        return;
      }

      toast.success("Welcome back! Login successful.");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google sign in failed. Please try again.");
    }
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10 dark:border-slate-800/80 dark:bg-[#0D1527]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sign in to manage your SportOra bookings
          </p>
        </div>

        <form onSubmit={handleCredentialsLogin} className="space-y-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pr-12 px-4 py-3 rounded-2xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <HiEye className="w-5 h-5" />
                ) : (
                  <HiEyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm py-3.5 rounded-2xl shadow-md transition-all active:scale-[0.98] disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="relative my-6 text-center">
          <span className="absolute inset-x-0 top-1/2 h-px bg-slate-100 dark:bg-slate-800" />
          <span className="relative bg-white dark:bg-[#0D1527] px-4 text-xs text-slate-400 uppercase tracking-widest font-medium">
            Or continue with
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-semibold py-3.5 rounded-2xl transition-all active:scale-[0.98]"
        >
          <GoogleIcon className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 dark:text-blue-500 hover:underline font-semibold"
          >
            Create one here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;