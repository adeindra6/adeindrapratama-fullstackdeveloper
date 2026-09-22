import {
  BriefcaseBusiness,
  CalendarDays,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";

import UserDropdown from "./UserDropdown";

const applicants = [
  {
    name: "John Doe",
    position: "Backend Engineer",
    applied: "Sep 20, 2026",
    status: "Shortlisted",
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    applied: "Sep 19, 2026",
    status: "Reviewing",
  },
  {
    name: "Michael Chen",
    position: "Frontend Engineer",
    applied: "Sep 18, 2026",
    status: "Interview",
  },
  {
    name: "Sarah Wilson",
    position: "Product Manager",
    applied: "Sep 17, 2026",
    status: "Applied",
  },
];

const statusStyles: Record<string, string> = {
  Applied: "bg-blue-50 text-blue-600",
  Reviewing: "bg-yellow-50 text-yellow-600",
  Shortlisted: "bg-purple-50 text-purple-600",
  Accepted: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-600",
};

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h3>

          <p className="mt-2 text-xs text-gray-500">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-indigo-50 p-3">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden min-h-screen w-64 border-r bg-white lg:block">
          <div className="flex h-16 items-center border-b px-6">
            <h1 className="text-xl font-bold text-indigo-600">
              JobTrack
            </h1>
          </div>

          <nav className="space-y-1 p-4">
            <a
              href="/company/dashboard"
              className="block rounded-lg bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-600"
            >
              Dashboard
            </a>

            <a
              href="/company/jobs"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Jobs
            </a>

            <a
              href="/company/applicants"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Applicants
            </a>

            <a
              href="/company/interviews"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Interviews
            </a>

            <a
              href="/company/messages"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Messages
            </a>

            <a
              href="/company/profile"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Company
            </a>

            <a
              href="/settings"
              className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div>
              <h2 className="font-semibold text-gray-900">
                Recruitment Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-lg p-2 hover:bg-gray-100">
                🔔
              </button>

              <UserDropdown />
            </div>
          </header>

          <div className="p-6">
            {/* Greeting */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Good morning, Acme Team 👋
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Here is an overview of your recruitment activity.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Active Jobs"
                value="12"
                description="+2 this month"
                icon={BriefcaseBusiness}
              />

              <StatCard
                title="Applicants"
                value="248"
                description="+32 this month"
                icon={Users}
              />

              <StatCard
                title="Interviews"
                value="32"
                description="This month"
                icon={CalendarDays}
              />

              <StatCard
                title="Offers"
                value="6"
                description="3 pending response"
                icon={Handshake}
              />
            </div>

            {/* Chart + Interviews */}
            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              {/* Chart */}
              <div className="rounded-xl border bg-white p-6 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Recruitment Overview
                    </h2>

                    <p className="text-sm text-gray-500">
                      Applicants received over the last 6 months
                    </p>
                  </div>

                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="mt-8 flex h-64 items-end gap-5">
                  {[40, 55, 45, 75, 60, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div
                          className="w-full rounded-t-md bg-indigo-500"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                        <span className="text-xs text-gray-400">
                          {
                            [
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                            ][index]
                          }
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Interviews */}
              <div className="rounded-xl border bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Upcoming Interviews
                    </h2>

                    <p className="text-sm text-gray-500">
                      Your next interviews
                    </p>
                  </div>

                  <CalendarDays className="h-5 w-5 text-gray-500" />
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          Sarah Wilson
                        </p>

                        <p className="text-sm text-gray-500">
                          Product Manager
                        </p>
                      </div>

                      <span className="text-xs font-medium text-indigo-600">
                        Tomorrow
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-gray-500">
                      10:00 AM · Google Meet
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          Michael Chen
                        </p>

                        <p className="text-sm text-gray-500">
                          Frontend Engineer
                        </p>
                      </div>

                      <span className="text-xs font-medium text-indigo-600">
                        Sep 25
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-gray-500">
                      2:00 PM · Office
                    </p>
                  </div>
                </div>

                <a
                  href="/interviews"
                  className="mt-5 block w-full rounded-lg border px-4 py-2 text-center text-sm font-medium hover:bg-gray-50"
                >
                  View all interviews
                </a>
              </div>
            </div>

            {/* Recent Applicants */}
            <div className="mt-6 rounded-xl border bg-white">
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Recent Applicants
                  </h2>

                  <p className="text-sm text-gray-500">
                    Candidates who recently applied.
                  </p>
                </div>

                <a
                  href="/applicants"
                  className="text-sm font-medium text-indigo-600"
                >
                  View all
                </a>
              </div>

              <div className="divide-y">
                {applicants.map((applicant) => (
                  <div
                    key={applicant.name}
                    className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                        {applicant.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-900">
                          {applicant.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {applicant.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <span className="text-sm text-gray-400">
                        {applicant.applied}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[applicant.status]
                        }`}
                      >
                        {applicant.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}