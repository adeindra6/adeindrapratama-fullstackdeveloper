import { Router } from "express";
import { getJobsController, getJobByIdController } from "../controllers/jobs.controller";

const router = Router();

router.get("/", getJobsController);
router.get("/:id", getJobByIdController);

export default router;