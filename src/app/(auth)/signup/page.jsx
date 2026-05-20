"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const satisfiesLength = password.length >= 6;
  const satisfiesUppercase = /[A-Z]/.test(password);
  const satisfiesLowercase = /[a-z]/.test(password);

  const validatePassword = (pass) => {
    if (!satisfiesLength) return "Password must be at least 6 characters long.";
    if (!satisfiesUppercase)
      return "Password must contain at least one uppercase letter.";
    if (!satisfiesLowercase)
      return "Password must contain at least one lowercase letter.";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !photoUrl || !password) {
      toast.error("All fields are required!");
      return;
    }

    const validationError = validatePassword(password);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image: photoUrl,
      });

      if (error) {
        toast.error(error.message || "Registration failed. Please try again.");
        return;
      }

      toast.success("Account created successfully! Redirecting to login...");
      router.push("/login");
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
      toast.error("Google sign up failed.");
    }
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10 dark:border-slate-800/80 dark:bg-[#0D1527]">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white sm:text-3xl">
            Join SportOra
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Create an account to host or reserve sports arenas.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Photo URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
              className="w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pr-12 px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-all outline-none border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <HiEye className="w-5 h-5" /> : <HiEyeOff className="w-5 h-5" />}
              </button>
            </div>

            {/* Password Requirements */}
            <div className="mt-1.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/50 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                Password must contain:
              </p>
              <div className="flex items-center gap-1.5 text-xs">
                <span className={`transition-colors duration-200 ${satisfiesLength ? "text-emerald-500 font-bold" : "text-slate-400"}`}>
                  {satisfiesLength ? "✓" : "•"} 6+ characters
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className={`transition-colors duration-200 ${satisfiesUppercase ? "text-emerald-500 font-bold" : "text-slate-400"}`}>
                  {satisfiesUppercase ? "✓" : "•"} One uppercase letter (A-Z)
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className={`transition-colors duration-200 ${satisfiesLowercase ? "text-emerald-500 font-bold" : "text-slate-400"}`}>
                  {satisfiesLowercase ? "✓" : "•"} One lowercase letter (a-z)
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="relative my-5 text-center">
          <span className="absolute inset-x-0 top-1/2 h-px bg-slate-100 dark:bg-slate-800" />
          <span className="relative bg-white dark:bg-[#0D1527] px-3 text-xs text-slate-400 uppercase tracking-widest font-medium">
            Or
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-semibold text-sm py-2.5 rounded-xl transition-all"
        >
          <FcGoogle className="w-5 h-5" />
          Sign Up with Google
        </button>

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline font-bold">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;