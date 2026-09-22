"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Banknote,
  Loader2,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  employment: string;
  salaryMin?: number;
  salaryMax?: number;
  companyId: string;
  companyName: string;
  hasApplied: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `http://localhost:3001/api/jobs/${jobId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job");
        }

        const result = await response.json();

        setJob(result.data);
      } catch (error) {
        console.error("Failed to fetch job:", error);
        setError("Unable to load this job posting.");
      } finally {
        setLoading(false);
      }
    }

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  async function handleApply() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const response = await fetch(
        `http://localhost:3001/api/jobs/${jobId}/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            coverLetter:
              "I am interested in this position and believe my experience matches the requirements.",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setJob((currentJob) =>
        currentJob
          ? {
              ...currentJob,
              hasApplied: true,
            }
          : currentJob
      );

      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to apply"
      );
    }
  }

  function formatSalary() {
    if (!job?.salaryMin && !job?.salaryMax) {
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
      month: "long",
      year: "numeric",
    });
  }

  function formatEmployment(employment: string) {
    return employment
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex min-h-[400px] items-center justify-center rounded-xl border bg-white">
            <div className="flex items-center gap-3 text-gray-500">
              <Loader2 size={20} className="animate-spin" />
              <span>Loading job details...</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="mx-auto max-w-5xl px-6 py-10">
          <div className="rounded-xl border bg-white p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <Briefcase size={24} className="text-red-500" />
            </div>

            <h1 className="mt-4 text-lg font-semibold text-gray-900">
              Job not found
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {error || "This job posting may no longer be available."}
            </p>

            <Link
              href="/job-seeker/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <ArrowLeft size={16} />
              Back to Jobs
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-8">
        {/* Back */}
        <Link
          href="/job-seeker/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600"
        >
          <ArrowLeft size={16} />
          Back to Jobs
        </Link>

        {/* Job Header */}
        <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              {/* Company Logo */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Building2 size={30} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {job.title}
                </h1>

                <p className="mt-2 text-base font-medium text-gray-600">
                  {job.companyName}
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={17} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={17} />
                    {formatEmployment(job.employment)}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Status */}
            <div>
              {job.isActive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                  <CheckCircle2 size={14} />
                  Active
                </span>
              ) : (
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                  Closed
                </span>
              )}
            </div>
          </div>

          {/* Job Meta */}
          <div className="mt-8 grid gap-4 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoItem
              icon={<MapPin size={18} />}
              label="Location"
              value={job.location}
            />

            <InfoItem
              icon={<Briefcase size={18} />}
              label="Employment"
              value={formatEmployment(job.employment)}
            />

            <InfoItem
              icon={<Banknote size={18} />}
              label="Salary"
              value={formatSalary()}
            />

            <InfoItem
              icon={<CalendarDays size={18} />}
              label="Posted"
              value={formatDate(job.createdAt)}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Description */}
            <section className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Job Description
              </h2>

              <div className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-600">
                {job.description}
              </div>
            </section>

            {/* Job Information */}
            <section className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Job Information
              </h2>

              <div className="mt-5 space-y-5">
                <DetailRow
                  icon={<Briefcase size={18} />}
                  label="Employment Type"
                  value={formatEmployment(job.employment)}
                />

                <DetailRow
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={job.location}
                />

                <DetailRow
                  icon={<Banknote size={18} />}
                  label="Salary"
                  value={formatSalary()}
                />

                <DetailRow
                  icon={<CalendarDays size={18} />}
                  label="Posted Date"
                  value={formatDate(job.createdAt)}
                />

                <DetailRow
                  icon={<Clock size={18} />}
                  label="Last Updated"
                  value={formatDate(job.updatedAt)}
                />
              </div>
            </section>
          </div>

          {/* Right */}
          <aside>
            <div className="sticky top-6 rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900">
                Interested in this job?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Apply now and take the next step in your career.
              </p>

              <button
                type="button"
                disabled={!job.isActive || job.hasApplied}
                onClick={handleApply}
                className="mt-5 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {!job.isActive
                  ? "Job Closed"
                  : job.hasApplied
                  ? "Already Applied"
                  : "Apply Now"}
              </button>

              <div className="mt-6 border-t pt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Company
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <Building2 size={19} className="text-gray-500" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {job.companyName}
                    </p>

                    <p className="text-xs text-gray-500">
                      Company ID: {job.companyId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* Header */

function Header() {
  return (
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
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}

/* Info Item */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-indigo-500">{icon}</div>

      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}

/* Detail Row */

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}