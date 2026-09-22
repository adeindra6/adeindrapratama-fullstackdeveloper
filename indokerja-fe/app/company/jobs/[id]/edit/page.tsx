"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface JobPosting {
  id: number;
  title: string;
  description: string;
  location: string;
  employment: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  isActive: boolean;
}

export default function EditJobPage() {
  const params = useParams();
  const router = useRouter();

  const jobId = params.id as string;

  const [job, setJob] = useState<JobPosting | null>(
    null
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [employment, setEmployment] =
    useState("FULL_TIME");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [isActive, setIsActive] = useState(true);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchJob() {
        try {
        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("Please login first");
        }

        const response = await fetch(
            `http://localhost:3001/api/company/jobs/${jobId}`,
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
            result.message || "Failed to fetch job"
            );
        }

        const data: JobPosting = result.data;

        setJob(data);
        setTitle(data.title);
        setDescription(data.description);
        setLocation(data.location);
        setEmployment(data.employment);
        setSalaryMin(data.salaryMin?.toString() ?? "");
        setSalaryMax(data.salaryMax?.toString() ?? "");
        setIsActive(data.isActive);
        } catch (error) {
        console.error(error);

        setError(
            error instanceof Error
            ? error.message
            : "Failed to fetch job"
        );
        } finally {
        setLoading(false);
        }
    }

    fetchJob();
    }, [jobId]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Please login first");
      }

      const response = await fetch(
        `http://localhost:3001/api/company/jobs/${jobId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            description,
            location,
            employment,
            salaryMin: salaryMin
              ? Number(salaryMin)
              : null,
            salaryMax: salaryMax
              ? Number(salaryMax)
              : null,
            isActive,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to update job"
        );
      }

      router.push("/company/jobs");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to update job"
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse rounded-xl bg-white p-8">
            <div className="h-8 w-64 rounded bg-gray-200" />
            <div className="mt-8 h-12 rounded bg-gray-200" />
            <div className="mt-4 h-32 rounded bg-gray-200" />
            <div className="mt-4 h-12 rounded bg-gray-200" />
          </div>
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-8 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Job not found
            </h1>

            <button
              type="button"
              onClick={() =>
                router.push("/company/jobs")
              }
              className="mt-4 text-sm font-medium text-indigo-600"
            >
              Back to jobs
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          ← Back
        </button>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Job Posting
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Update your job posting information.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Job Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={7}
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Employment Type
                </label>

                <select
                  value={employment}
                  onChange={(event) =>
                    setEmployment(event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="FULL_TIME">
                    Full Time
                  </option>
                  <option value="PART_TIME">
                    Part Time
                  </option>
                  <option value="CONTRACT">
                    Contract
                  </option>
                  <option value="INTERNSHIP">
                    Internship
                  </option>
                  <option value="FREELANCE">
                    Freelance
                  </option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Minimum Salary
                </label>

                <input
                  type="number"
                  value={salaryMin}
                  onChange={(event) =>
                    setSalaryMin(event.target.value)
                  }
                  min="0"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Maximum Salary
                </label>

                <input
                  type="number"
                  value={salaryMax}
                  onChange={(event) =>
                    setSalaryMax(event.target.value)
                  }
                  min="0"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <label className="flex cursor-pointer items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Job Status
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Active jobs are visible to job seekers.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(event) =>
                    setIsActive(event.target.checked)
                  }
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </label>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() =>
                  router.push("/company/jobs")
                }
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}