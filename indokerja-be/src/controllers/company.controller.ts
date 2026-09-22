import { Request, Response } from "express";

import {
  createCompanyJob,
  deleteCompanyJob,
  getCompanyJobById,
  getCompanyJobs,
  updateCompanyJob,
} from "../services/company.service";

import { getMyCompany } from "../services/company.service";

/**
 * GET /api/company/jobs
 */
export async function getCompanyJobsController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const company = await getMyCompany(req.user.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    const jobs = await getCompanyJobs(company.id);

    const data = jobs.map((job) => ({
      id: job.id,
      title: job.title,
      description: job.description,
      location: job.location,
      employment: job.employment,
      salaryMin: job.salaryMin,
      salaryMax: job.salaryMax,
      isActive: job.isActive,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
      applicationCount: job._count.applications,
    }));

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Get company jobs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch company jobs",
    });
  }
}

/**
 * GET /api/company/jobs/:id
 */
export async function getCompanyJobByIdController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const jobId = Number(req.params.id);

    if (!Number.isInteger(jobId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
    }

    const company = await getMyCompany(req.user.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    const job = await getCompanyJobById(
      jobId,
      company.id
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job posting not found",
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
        isActive: job.isActive,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
        applicationCount: job._count.applications,
      },
    });
  } catch (error) {
    console.error("Get company job error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch job posting",
    });
  }
}

/**
 * POST /api/company/jobs
 */
export async function createCompanyJobController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const {
      title,
      description,
      location,
      employment,
      salaryMin,
      salaryMax,
    } = req.body;

    // Validate required fields
    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Job title is required",
      });
    }

    if (!description?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });
    }

    if (!location?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Job location is required",
      });
    }

    if (!employment?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Employment type is required",
      });
    }

    const company = await getMyCompany(req.user.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    const parsedSalaryMin =
      salaryMin !== undefined &&
      salaryMin !== null &&
      salaryMin !== ""
        ? Number(salaryMin)
        : null;

    const parsedSalaryMax =
      salaryMax !== undefined &&
      salaryMax !== null &&
      salaryMax !== ""
        ? Number(salaryMax)
        : null;

    if (
      parsedSalaryMin !== null &&
      !Number.isFinite(parsedSalaryMin)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid minimum salary",
      });
    }

    if (
      parsedSalaryMax !== null &&
      !Number.isFinite(parsedSalaryMax)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid maximum salary",
      });
    }

    if (
      parsedSalaryMin !== null &&
      parsedSalaryMax !== null &&
      parsedSalaryMin > parsedSalaryMax
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Minimum salary cannot be greater than maximum salary",
      });
    }

    const job = await createCompanyJob(company.id, {
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      employment: employment.trim(),
      salaryMin: parsedSalaryMin,
      salaryMax: parsedSalaryMax,
    });

    return res.status(201).json({
      success: true,
      message: "Job posting created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Create company job error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create job posting",
    });
  }
}

/**
 * PUT /api/company/jobs/:id
 */
export async function updateCompanyJobController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const jobId = Number(req.params.id);

    if (!Number.isInteger(jobId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
    }

    const company = await getMyCompany(req.user.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    const {
      title,
      description,
      location,
      employment,
      salaryMin,
      salaryMax,
      isActive,
    } = req.body;

    // Validate salary
    const parsedSalaryMin =
      salaryMin !== undefined &&
      salaryMin !== null &&
      salaryMin !== ""
        ? Number(salaryMin)
        : salaryMin === null
        ? null
        : undefined;

    const parsedSalaryMax =
      salaryMax !== undefined &&
      salaryMax !== null &&
      salaryMax !== ""
        ? Number(salaryMax)
        : salaryMax === null
        ? null
        : undefined;

    if (
      parsedSalaryMin !== undefined &&
      parsedSalaryMin !== null &&
      !Number.isFinite(parsedSalaryMin)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid minimum salary",
      });
    }

    if (
      parsedSalaryMax !== undefined &&
      parsedSalaryMax !== null &&
      !Number.isFinite(parsedSalaryMax)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid maximum salary",
      });
    }

    if (
      parsedSalaryMin !== undefined &&
      parsedSalaryMin !== null &&
      parsedSalaryMax !== undefined &&
      parsedSalaryMax !== null &&
      parsedSalaryMin > parsedSalaryMax
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Minimum salary cannot be greater than maximum salary",
      });
    }

    const job = await updateCompanyJob(
      jobId,
      company.id,
      {
        ...(title !== undefined && {
          title: title.trim(),
        }),

        ...(description !== undefined && {
          description: description.trim(),
        }),

        ...(location !== undefined && {
          location: location.trim(),
        }),

        ...(employment !== undefined && {
          employment: employment.trim(),
        }),

        ...(parsedSalaryMin !== undefined && {
          salaryMin: parsedSalaryMin,
        }),

        ...(parsedSalaryMax !== undefined && {
          salaryMax: parsedSalaryMax,
        }),

        ...(isActive !== undefined && {
          isActive: Boolean(isActive),
        }),
      }
    );

    return res.status(200).json({
      success: true,
      message: "Job posting updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Update company job error:", error);

    if (
      error instanceof Error &&
      error.message === "JOB_NOT_FOUND"
    ) {
      return res.status(404).json({
        success: false,
        message: "Job posting not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update job posting",
    });
  }
}

/**
 * DELETE /api/company/jobs/:id
 */
export async function deleteCompanyJobController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const jobId = Number(req.params.id);

    if (!Number.isInteger(jobId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
    }

    const company = await getMyCompany(req.user.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    await deleteCompanyJob(jobId, company.id);

    return res.status(200).json({
      success: true,
      message: "Job posting deleted successfully",
    });
  } catch (error) {
    console.error("Delete company job error:", error);

    if (
      error instanceof Error &&
      error.message === "JOB_NOT_FOUND"
    ) {
      return res.status(404).json({
        success: false,
        message: "Job posting not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete job posting",
    });
  }
}