"use client";

import { useState } from "react";
import Link from "next/link";

type AccountType = "job-seeker" | "company";

export default function LoginPage() {
  const [accountType, setAccountType] =
    useState<AccountType>("job-seeker");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-600"
          >
            Indokerja.id
          </Link>

          <p className="text-sm text-gray-600">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create account
            </Link>
          </p>
        </div>
      </nav>

      {/* Login */}
      <div className="flex justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back
            </h1>

            <p className="mt-2 text-gray-600">
              Sign in to continue to Indokerja.id.
            </p>
          </div>

          {/* Account Type */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAccountType("job-seeker")}
              className={`rounded-xl border-2 p-4 transition ${
                accountType === "job-seeker"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="text-2xl">👤</div>

              <div className="mt-2 text-sm font-semibold text-gray-900">
                Job Seeker
              </div>
            </button>

            <button
              type="button"
              onClick={() => setAccountType("company")}
              className={`rounded-xl border-2 p-4 transition ${
                accountType === "company"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="text-2xl">🏢</div>

              <div className="mt-2 text-sm font-semibold text-gray-900">
                Company
              </div>
            </button>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {accountType === "job-seeker"
                  ? "Job Seeker Login"
                  : "Company Login"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {accountType === "job-seeker"
                  ? "Access your applications and job search."
                  : "Manage your company and job postings."}
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  {accountType === "company"
                    ? "Company Email"
                    : "Email Address"}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={
                    accountType === "company"
                      ? "hr@company.com"
                      : "john@example.com"
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Sign In as{" "}
                {accountType === "job-seeker"
                  ? "Job Seeker"
                  : "Company"}
              </button>
            </form>

            {/* Register */}
            <div className="mt-6 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm text-gray-600">
                Do not have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>

          {/* Security note */}
          <p className="mt-6 text-center text-xs text-gray-500">
            Your account information is securely protected.
          </p>
        </div>
      </div>
    </main>
  );
}
