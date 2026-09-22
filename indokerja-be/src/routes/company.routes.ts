import { Router } from "express";

import {
  createCompanyJobController,
  deleteCompanyJobController,
  getCompanyJobByIdController,
  getCompanyJobsController,
  updateCompanyJobController,
} from "../controllers/company.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Get all jobs belonging to logged-in company
router.get(
  "/",
  authenticate,
  getCompanyJobsController
);

// Get one job belonging to logged-in company
router.get(
  "/:id",
  authenticate,
  getCompanyJobByIdController
);

// Create job
router.post(
  "/",
  authenticate,
  createCompanyJobController
);

// Update job
router.put(
  "/:id",
  authenticate,
  updateCompanyJobController
);

// Delete job
router.delete(
  "/:id",
  authenticate,
  deleteCompanyJobController
);

export default router;