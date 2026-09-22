import prisma from "../lib/prisma";

interface CreateJobInput {
  title: string;
  description: string;
  location: string;
  employment: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
}

interface UpdateJobInput {
  title?: string;
  description?: string;
  location?: string;
  employment?: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  isActive?: boolean;
}

export async function getMyCompany(userId: number) {
  return prisma.companyProfile.findUnique({
    where: {
      userId,
    },
    select: {
      id: true,
      userId: true,
      companyName: true,
      website: true,
    },
  });
}

/**
 * Get all jobs belonging to the logged-in company.
 */
export async function getCompanyJobs(companyId: number) {
  return prisma.jobPosting.findMany({
    where: {
      companyId,
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Get one job belonging to the logged-in company.
 */
export async function getCompanyJobById(
  jobId: number,
  companyId: number
) {
  return prisma.jobPosting.findFirst({
    where: {
      id: jobId,
      companyId,
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
  });
}

/**
 * Create a new job posting.
 */
export async function createCompanyJob(
  companyId: number,
  input: CreateJobInput
) {
  return prisma.jobPosting.create({
    data: {
      companyId,
      title: input.title,
      description: input.description,
      location: input.location,
      employment: input.employment,
      salaryMin: input.salaryMin ?? null,
      salaryMax: input.salaryMax ?? null,
    },
  });
}

/**
 * Update an existing job posting.
 */
export async function updateCompanyJob(
  jobId: number,
  companyId: number,
  input: UpdateJobInput
) {
  // First make sure this job belongs to this company.
  const existingJob = await prisma.jobPosting.findFirst({
    where: {
      id: jobId,
      companyId,
    },
  });

  if (!existingJob) {
    throw new Error("JOB_NOT_FOUND");
  }

  return prisma.jobPosting.update({
    where: {
      id: jobId,
    },
    data: {
      ...(input.title !== undefined && {
        title: input.title,
      }),

      ...(input.description !== undefined && {
        description: input.description,
      }),

      ...(input.location !== undefined && {
        location: input.location,
      }),

      ...(input.employment !== undefined && {
        employment: input.employment,
      }),

      ...(input.salaryMin !== undefined && {
        salaryMin: input.salaryMin,
      }),

      ...(input.salaryMax !== undefined && {
        salaryMax: input.salaryMax,
      }),

      ...(input.isActive !== undefined && {
        isActive: input.isActive,
      }),
    },
  });
}

/**
 * Delete a job posting.
 */
export async function deleteCompanyJob(
  jobId: number,
  companyId: number
) {
  // Make sure this job belongs to this company.
  const existingJob = await prisma.jobPosting.findFirst({
    where: {
      id: jobId,
      companyId,
    },
  });

  if (!existingJob) {
    throw new Error("JOB_NOT_FOUND");
  }

  return prisma.jobPosting.delete({
    where: {
      id: jobId,
    },
  });
}