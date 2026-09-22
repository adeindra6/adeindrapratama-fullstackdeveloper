import prisma from "../lib/prisma";

export async function getJobs() {
  return prisma.jobPosting.findMany({
    where: {
      isActive: true,
    },
    include: {
      company: {
        select: {
          companyName: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getJobById(id: number, jobSeekerId?: number) {
  const job = await prisma.jobPosting.findUnique({
    where: {
      id,
    },
    include: {
      company: {
        select: {
          companyName: true,
        },
      },
    },
  });

  if (!job) {
    return null;
  }

  let hasApplied = false;

  if (jobSeekerId) {
    const application = await prisma.jobApplication.findUnique({
      where: {
        jobSeekerId_jobPostingId: {
          jobSeekerId,
          jobPostingId: id,
        },
      },
    });

    hasApplied = !!application;
  }

  return {
    ...job,
    hasApplied,
  };
}