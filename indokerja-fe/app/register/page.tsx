"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useState } from "react";
import Link from "next/link";

type AccountType = "job-seeker" | "company";

export default function RegisterPage() {
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
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </nav>

      {/* Register Form */}
      <div className="flex justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Create your account
            </h1>

            <p className="mt-2 text-gray-600">
              Choose how you want to use Indokerja.id.
            </p>
          </div>

          {/* Account Type */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {/* Job Seeker */}
            <button
              type="button"
              onClick={() => setAccountType("job-seeker")}
              className={`rounded-xl border-2 p-6 text-left transition ${
                accountType === "job-seeker"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="mb-3 text-3xl">👤</div>

              <h2 className="text-lg font-semibold text-gray-900">
                Job Seeker
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Find jobs, manage applications, track interviews,
                and organize your job search.
              </p>

              {accountType === "job-seeker" && (
                <div className="mt-4 text-sm font-semibold text-indigo-600">
                  ✓ Selected
                </div>
              )}
            </button>

            {/* Company */}
            <button
              type="button"
              onClick={() => setAccountType("company")}
              className={`rounded-xl border-2 p-6 text-left transition ${
                accountType === "company"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="mb-3 text-3xl">🏢</div>

              <h2 className="text-lg font-semibold text-gray-900">
                Company
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Post jobs, manage applicants, schedule interviews,
                and find great candidates.
              </p>

              {accountType === "company" && (
                <div className="mt-4 text-sm font-semibold text-indigo-600">
                  ✓ Selected
                </div>
              )}
            </button>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {accountType === "job-seeker" ? (
              <JobSeekerForm />
            ) : (
              <CompanyForm />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------- */
/* Job Seeker Form                                    */
/* -------------------------------------------------- */

function JobSeekerForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      role: "JOB_SEEKER",
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      jobTitle: formData.get("jobTitle"),
      location: formData.get("location"),
    };

    const response = await fetch(
      "http://localhost:3001/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      alert(result.message);
      return;
    }

    console.log(result);

    toast.success("Account created successfully!", {
      description: "You can now log in with your account.",
    });

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Job Seeker Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Create your profile and start managing your job applications.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            First Name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="jobTitle"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Current Job Title
        </label>

        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          placeholder="Software Engineer"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Location
        </label>

        <input
          id="location"
          name="location"
          type="text"
          placeholder="Jakarta, Indonesia"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600"
        />

        <span>
          I agree to the Terms of Service and Privacy Policy.
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Create Job Seeker Account
      </button>
    </form>
  );
}

/* -------------------------------------------------- */
/* Company Form                                       */
/* -------------------------------------------------- */

function CompanyForm() {
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      role: "COMPANY",

      companyName: formData.get("companyName"),
      email: formData.get("companyEmail"),
      password: formData.get("password"),
      industry: formData.get("industry"),
      companySize: formData.get("companySize"),
      website: formData.get("website"),
    };

    const response = await fetch(
      "http://localhost:3001/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      alert(result.message);
      return;
    }

    console.log(result);

    toast.success("Account created successfully!", {
      description: "You can now log in with your account.",
    });

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Company Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Create your company profile and start hiring candidates.
        </p>
      </div>

      <div>
        <label
          htmlFor="companyName"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Company Name
        </label>

        <input
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Acme Corporation"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="companyEmail"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Company Email
        </label>

        <input
          id="companyEmail"
          name="companyEmail"
          type="email"
          placeholder="hr@company.com"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="industry"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Industry
        </label>

        <select
          id="industry"
          name="industry"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">Select an industry</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="companySize"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Company Size
        </label>

        <select
          id="companySize"
          name="companySize"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">Select company size</option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="201-500">201–500 employees</option>
          <option value="501-1000">501–1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="website"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Company Website
        </label>

        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://company.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600"
        />

        <span>
          I agree to the Terms of Service and Privacy Policy.
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Create Company Account
      </button>
    </form>
  );
}
