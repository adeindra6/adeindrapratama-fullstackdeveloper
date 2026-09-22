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

export async function getJobById(id: number) {
  return prisma.jobPosting.findUnique({
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
}