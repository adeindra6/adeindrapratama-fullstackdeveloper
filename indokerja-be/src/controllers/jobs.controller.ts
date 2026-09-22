import { Request, Response } from "express";
import { getJobs, getJobById } from "../services/jobs.service";

export async function getJobsController(
  req: Request,
  res: Response,
) {
  try {
    const jobs = await getJobs();

    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Failed to fetch jobs:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
}

export async function getJobByIdController(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params;

    const job = await getJobById(Number(id));

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: job.id,
        title: job.title,
        description: job.description,
        location: job.location,
        employment: job.employment,
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
        companyId: job.companyId,
        companyName: job.company.companyName,
        isActive: job.isActive,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
      },
    });
  } catch (error) {
    console.error("Failed to fetch job:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });
  }
}