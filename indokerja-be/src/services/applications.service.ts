import prisma from "../lib/prisma";

interface CreateApplicationInput {
  jobSeekerId: number;
  jobPostingId: number;
  coverLetter?: string;
}

export async function createApplication(
  input: CreateApplicationInput
) {
  const {
    jobSeekerId,
    jobPostingId,
    coverLetter,
  } = input;

  // Check whether the job exists
  const job = await prisma.jobPosting.findUnique({
    where: {
      id: Number(jobPostingId),
    },
  });

  if (!job) {
    throw new Error("JOB_NOT_FOUND");
  }

  // Check whether the job is still active
  if (!job.isActive) {
    throw new Error("JOB_NOT_ACTIVE");
  }

  // Check whether the user has already applied
  const existingApplication =
    await prisma.jobApplication.findUnique({
      where: {
        jobSeekerId_jobPostingId: {
          jobSeekerId: jobSeekerId,
          jobPostingId: jobPostingId,
        },
      },
    });

  if (existingApplication) {
    throw new Error("ALREADY_APPLIED");
  }

  // Create application
  return prisma.jobApplication.create({
    data: {
      jobSeekerId: Number(jobSeekerId),
      jobPostingId: Number(jobPostingId),
      coverLetter,
      status: "APPLIED",
      appliedAt: new Date(),
    },
    include: {
      jobPosting: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });
}