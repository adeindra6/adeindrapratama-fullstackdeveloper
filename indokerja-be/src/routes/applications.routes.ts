import { Router } from "express";
import {
  createApplicationController,
} from "../controllers/applications.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/jobs/:jobPostingId/apply",
  authenticate,
  createApplicationController
);

export default router;