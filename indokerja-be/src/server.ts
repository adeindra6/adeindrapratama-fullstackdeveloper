import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobsRouter from "./routes/jobs.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  console.log("================================");
  console.log("Incoming request");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Host:", req.headers.host);
  console.log("================================");

  next();
});

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  console.log("HEALTH ROUTE HIT");

  res.status(200).json({
    status: "ok",
    message: "Job Application API is running",
  });
});

app.use("/api/jobs", jobsRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});