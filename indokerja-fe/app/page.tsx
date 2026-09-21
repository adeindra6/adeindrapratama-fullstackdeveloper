const features = [
  {
    title: "Track Applications",
    description:
      "Keep all your job applications organized in one place and know exactly where you stand.",
    icon: "📋",
  },
  {
    title: "Manage Interviews",
    description:
      "Never miss an interview. Track upcoming interviews, schedules, and important details.",
    icon: "📅",
  },
  {
    title: "Track Progress",
    description:
      "Monitor your applications from Applied to Interview, Offer, or Rejected.",
    icon: "📊",
  },
];

const applications = [
  {
    company: "Google",
    position: "Software Engineer",
    status: "Interview",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    company: "Microsoft",
    position: "Frontend Developer",
    status: "Applied",
    statusColor: "bg-gray-100 text-gray-700",
  },
  {
    company: "Stripe",
    position: "Backend Engineer",
    status: "Offer",
    statusColor: "bg-green-100 text-green-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold text-indigo-600">
            Indokerja.id
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              How It Works
            </a>

            <a
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              🚀 Your job search, organized
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Manage your job search
              <span className="text-indigo-600"> with confidence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Keep track of every application, interview, follow-up, and offer
              in one simple dashboard. Spend less time organizing and more time
              landing your next opportunity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Register for free
              </a>

              <a
                href="#how-it-works"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              No credit card required.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Application Dashboard</h2>
                <p className="text-sm text-gray-500">
                  Your job search overview
                </p>
              </div>

              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
                + Add Job
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="text-sm text-gray-500">Applications</p>
                <p className="mt-1 text-2xl font-bold">24</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-gray-500">Interviews</p>
                <p className="mt-1 text-2xl font-bold">6</p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-sm text-gray-500">Offers</p>
                <p className="mt-1 text-2xl font-bold">2</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {applications.map((application) => (
                <div
                  key={`${application.company}-${application.position}`}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
                >
                  <div>
                    <p className="font-semibold">{application.company}</p>
                    <p className="text-sm text-gray-500">
                      {application.position}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${application.statusColor}`}
                  >
                    {application.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">FEATURES</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to manage your job search
            </h2>

            <p className="mt-4 text-gray-600">
              Keep your job applications organized and stay on top of every
              opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-indigo-600">HOW IT WORKS</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your job search in three simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Add Applications
              </h3>

              <p className="mt-3 text-gray-600">
                Add companies, positions, application dates, links, and notes.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Track Progress
              </h3>

              <p className="mt-3 text-gray-600">
                Update your application status as you move through the hiring
                process.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Land Your Next Job
              </h3>

              <p className="mt-3 text-gray-600">
                Stay organized and focus your time on the opportunities that
                matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-indigo-600 px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to organize your job search?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Start tracking your applications today and take control of your
            job search.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-indigo-600 hover:bg-gray-100"
          >
            Register for Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-semibold text-indigo-600">Indokerja.id</p>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Indokerja.id. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
