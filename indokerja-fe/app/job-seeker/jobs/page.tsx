"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Search,
  Building2,
  ChevronRight,
  Loader2,
} from "lucide-react";
import type { Job } from "@/types/job";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "http://localhost:3001/api/jobs"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const result = await response.json();

        setJobs(result.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError("Unable to load jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchValue = search.toLowerCase().trim();
      const locationValue = location.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        job.title.toLowerCase().includes(searchValue) ||
        job.company.companyName.toLowerCase().includes(searchValue);

      const matchesLocation =
        !locationValue ||
        job.location.toLowerCase().includes(locationValue);

      return matchesSearch && matchesLocation;
    });
  }, [jobs, search, location]);

  function formatSalary(job: Job) {
    if (!job.salaryMin && !job.salaryMax) {
      return "Salary not specified";
    }

    if (job.salaryMin && job.salaryMax) {
      return `Rp ${job.salaryMin.toLocaleString(
        "id-ID"
      )} - Rp ${job.salaryMax.toLocaleString("id-ID")}`;
    }

    if (job.salaryMin) {
      return `From Rp ${job.salaryMin.toLocaleString("id-ID")}`;
    }

    return `Up to Rp ${job.salaryMax?.toLocaleString("id-ID")}`;
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/job-seeker/dashboard"
              className="flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Briefcase size={20} />
              </div>

              <span className="text-xl font-bold text-gray-900">
                Indokerja.id
              </span>
            </Link>

            <Link
              href="/job-seeker/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Find Your Next Job
          </h1>

          <p className="mt-1 text-gray-500">
            Discover job opportunities that match your skills and experience.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 rounded-xl border bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Search jobs
              </label>

              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Job title or company"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Location
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Jakarta, Bandung, Remote..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Clear */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setLocation("");
                }}
                className="w-full rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 md:w-auto"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Result count */}
        {!loading && !error && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {filteredJobs.length}
              </span>{" "}
              jobs
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center rounded-xl border bg-white">
            <div className="flex items-center gap-3 text-gray-500">
              <Loader2 size={20} className="animate-spin" />
              <span>Loading jobs...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filteredJobs.length === 0 && (
          <div className="rounded-xl border bg-white p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <Briefcase size={24} className="text-gray-400" />
            </div>

            <h2 className="mt-4 font-semibold text-gray-900">
              No jobs found
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or location.
            </p>
          </div>
        )}

        {/* Job List */}
        {!loading && !error && filteredJobs.length > 0 && (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl border bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  {/* Job information */}
                  <div className="flex gap-4">
                    {/* Company logo */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Building2 size={22} />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-gray-600">
                        {job.company.companyName}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={15} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Briefcase size={15} />
                          {job.employment}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <CalendarDays size={15} />
                          {formatDate(job.createdAt)}
                        </div>
                      </div>

                      <p className="mt-3 text-sm font-medium text-gray-700">
                        {formatSalary(job)}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/job-seeker/jobs/${job.id}`}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                  >
                    View Job
                    <ChevronRight size={16} />
                  </Link>
                </div>

                {/* Description */}
                {job.description && (
                  <div className="mt-5 border-t pt-4">
                    <p className="line-clamp-2 text-sm leading-6 text-gray-500">
                      {job.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}