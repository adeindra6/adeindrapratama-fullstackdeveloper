"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface JobPosting {
  id: number;
  title: string;
  description: string;
  location: string;
  employment: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  applicationCount?: number;
}

export default function CompanyJobsPage() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchJobs() {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                throw new Error("Please login first");
            }

            const response = await fetch(
                "http://localhost:3001/api/company/jobs",
                {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                result.message || "Failed to fetch jobs"
                );
            }

            setJobs(result.data);
        } catch (error) {
            console.error(error);

            setError(
                error instanceof Error
                ? error.message
                : "Failed to fetch jobs"
            );
        } finally {
            setLoading(false);
        }
    }

    fetchJobs();
    }, []);

  async function handleDelete(jobId: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job posting?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(jobId);

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Please login first");
      }

      const response = await fetch(
        `http://localhost:3001/api/company/jobs/${jobId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to delete job"
        );
      }

      setJobs((currentJobs) =>
        currentJobs.filter((job) => job.id !== jobId)
      );
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete job"
      );
    } finally {
      setDeletingId(null);
    }
  }

  async function handleToggleStatus(
    job: JobPosting
  ) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Please login first");
      }

      const response = await fetch(
        `http://localhost:3001/api/company/jobs/${job.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            isActive: !job.isActive,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to update job"
        );
      }

      setJobs((currentJobs) =>
        currentJobs.map((currentJob) =>
          currentJob.id === job.id
            ? {
                ...currentJob,
                isActive: !currentJob.isActive,
              }
            : currentJob
        )
      );
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to update job"
      );
    }
  }

  function formatSalary(
    salaryMin?: number | null,
    salaryMax?: number | null
  ) {
    if (!salaryMin && !salaryMax) {
      return "Salary not specified";
    }

    const format = (value: number) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(value);

    if (salaryMin && salaryMax) {
      return `${format(salaryMin)} - ${format(salaryMax)}`;
    }

    if (salaryMin) {
      return `From ${format(salaryMin)}`;
    }

    return `Up to ${format(salaryMax!)}`;
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div className="mb-3 h-8 w-64 rounded bg-gray-200" />
            <div className="mb-8 h-4 w-96 rounded bg-gray-200" />

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="space-y-5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-24 rounded-lg bg-gray-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Job Postings
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage the jobs your company has posted.
            </p>
          </div>

          <Link
            href="/company/jobs/new"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            + Create Job
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!error && jobs.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              No job postings yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Create your first job posting to start
              attracting candidates.
            </p>

            <Link
              href="/company/jobs/new"
              className="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Create Your First Job
            </Link>
          </div>
        )}

        {/* Jobs */}
        {jobs.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Job
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Employment
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Applications
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="px-6 py-5">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {job.title}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Posted{" "}
                            {formatDate(job.createdAt)}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {formatSalary(
                              job.salaryMin,
                              job.salaryMax
                            )}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {job.location}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                          {job.employment}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-gray-900">
                        {job.applicationCount ?? 0}
                      </td>

                      <td className="px-6 py-5">
                        {job.isActive ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                            Inactive
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/company/jobs/${job.id}/edit`}
                            className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Edit
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              handleToggleStatus(job)
                            }
                            className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                          >
                            {job.isActive
                              ? "Close"
                              : "Activate"}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(job.id)
                            }
                            disabled={
                              deletingId === job.id
                            }
                            className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId === job.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="divide-y divide-gray-100 md:hidden">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {job.location}
                      </p>
                    </div>

                    {job.isActive ? (
                      <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        Inactive
                      </span>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-gray-400">
                        Employment
                      </p>
                      <p className="mt-1 font-medium text-gray-700">
                        {job.employment}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Applications
                      </p>
                      <p className="mt-1 font-medium text-gray-700">
                        {job.applicationCount ?? 0}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-xs text-gray-400">
                        Salary
                      </p>
                      <p className="mt-1 font-medium text-gray-700">
                        {formatSalary(
                          job.salaryMin,
                          job.salaryMax
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={`/company/jobs/${job.id}/edit`}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        handleToggleStatus(job)
                      }
                      className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700"
                    >
                      {job.isActive
                        ? "Close Job"
                        : "Activate"}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(job.id)
                      }
                      disabled={
                        deletingId === job.id
                      }
                      className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 disabled:opacity-50"
                    >
                      {deletingId === job.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}