import { Request, Response } from "express";
import { createApplication } from "../services/applications.service";

export async function createApplicationController(
  req: Request,
  res: Response
) {
  try {
    const { jobPostingId } = req.params;

    if (typeof jobPostingId !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid job posting ID",
      });
    }

    const { coverLetter } = req.body;

    // For now, use a value supplied by authentication
    // Replace this with req.user.id later.
    const jobSeekerId = req.user!.id;

    if (!jobSeekerId) {
      return res.status(401).json({
        success: false,
        message: "Job seeker is not authenticated",
      });
    }

    const application = await createApplication({
      jobSeekerId,
      jobPostingId: Number(jobPostingId),
      coverLetter,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Create application error:", error);

    if (error instanceof Error) {
      if (error.message === "JOB_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Job posting not found",
        });
      }

      if (error.message === "JOB_NOT_ACTIVE") {
        return res.status(400).json({
          success: false,
          message: "This job posting is no longer active",
        });
      }

      if (error.message === "ALREADY_APPLIED") {
        return res.status(409).json({
          success: false,
          message: "You have already applied for this job",
        });
      }
    }

    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
}