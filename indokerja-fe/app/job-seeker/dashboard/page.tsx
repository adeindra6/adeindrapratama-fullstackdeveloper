import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  TrendingUp,
} from "lucide-react";

import UserDropdown from "./UserDropdown";

const applications = [
  {
    company: "Google",
    position: "Software Engineer",
    location: "Jakarta / Remote",
    date: "Sep 20, 2026",
    status: "Interview",
  },
  {
    company: "Tokopedia",
    position: "Backend Engineer",
    location: "Jakarta",
    date: "Sep 18, 2026",
    status: "Screening",
  },
  {
    company: "Gojek",
    position: "Full Stack Engineer",
    location: "Jakarta",
    date: "Sep 15, 2026",
    status: "Applied",
  },
  {
    company: "Traveloka",
    position: "Software Engineer",
    location: "Jakarta",
    date: "Sep 12, 2026",
    status: "Rejected",
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
          <p className="text-sm text-gray-500">{title}</p>
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
              Indokerja.id
            </h1>
          </div>

          <nav className="space-y-1 p-4">
            <a
              href="/job-seeker/dashboard"
              className="flex items-center rounded-lg bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-600"
            >
              Dashboard
            </a>

            <a
              href="/job-seeker/applications"
              className="flex items-center rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Applications
            </a>

            <a
              href="/job-seeker/saved-jobs"
              className="flex items-center rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Saved Jobs
            </a>

            <a
              href="/job-seeker/interviews"
              className="flex items-center rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Interviews
            </a>

            <a
              href="/job-seeker/profile"
              className="flex items-center rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              Profile
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div>
              <h2 className="font-semibold text-gray-900">
                Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-lg p-2 hover:bg-gray-100">
                🔔
              </button>

              <UserDropdown />
            </div>
          </header>

          <div className="p-6">
            {/* Greeting */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Good morning, Ade 👋
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Here&apos;s an overview of your job search.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Applications"
                value="24"
                description="+4 this month"
                icon={Briefcase}
              />

              <StatCard
                title="Active Applications"
                value="8"
                description="Currently in progress"
                icon={Clock3}
              />

              <StatCard
                title="Interviews"
                value="3"
                description="Upcoming interviews"
                icon={CalendarDays}
              />

              <StatCard
                title="Offers"
                value="1"
                description="Offers received"
                icon={CheckCircle2}
              />
            </div>

            {/* Middle section */}
            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              {/* Chart */}
              <div className="rounded-xl border bg-white p-6 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Application Activity
                    </h2>
                    <p className="text-sm text-gray-500">
                      Your applications over the last 6 months
                    </p>
                  </div>

                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="mt-8 flex h-64 items-end gap-5">
                  {[35, 50, 42, 70, 58, 85].map(
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

              {/* Upcoming */}
              <div className="rounded-xl border bg-white p-6">
                <h2 className="font-semibold text-gray-900">
                  Upcoming Interviews
                </h2>

                <div className="mt-5 space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          Google
                        </p>
                        <p className="text-sm text-gray-500">
                          Software Engineer
                        </p>
                      </div>

                      <span className="text-xs font-medium text-indigo-600">
                        Tomorrow
                      </span>
                    </div>

                    <div className="mt-3 text-xs text-gray-500">
                      10:00 AM · Google Meet
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          Tokopedia
                        </p>
                        <p className="text-sm text-gray-500">
                          Backend Engineer
                        </p>
                      </div>

                      <span className="text-xs font-medium text-indigo-600">
                        Sep 25
                      </span>
                    </div>

                    <div className="mt-3 text-xs text-gray-500">
                      2:00 PM · Online
                    </div>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50">
                  View all interviews
                </button>
              </div>
            </div>

            {/* Applications */}
            <div className="mt-6 rounded-xl border bg-white">
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Recent Applications
                  </h2>

                  <p className="text-sm text-gray-500">
                    Track the latest jobs you applied for.
                  </p>
                </div>

                <a
                  href="/applications"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  View all
                </a>
              </div>

              <div className="divide-y">
                {applications.map((application) => (
                  <div
                    key={application.company}
                    className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 font-bold text-gray-600">
                        {application.company.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-900">
                          {application.position}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {application.company} ·{" "}
                          {application.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <span className="text-sm text-gray-400">
                        {application.date}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[application.status]
                        }`}
                      >
                        {application.status}
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