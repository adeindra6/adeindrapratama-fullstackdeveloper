import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

export async function register(req: Request, res: Response) {
  try {
    const {
      email,
      password,
      role,
      firstName,
      lastName,
      jobTitle,
      location,
      resumeUrl,
      companyName,
      industry,
      companySize,
      website,
    } = req.body;

    // 1. Validate required fields
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "email, password, and role are required",
      });
    }

    // 2. Validate role
    if (!["JOB_SEEKER", "COMPANY"].includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const result = await prisma.$queryRaw`
        SELECT
            current_database() AS database,
            current_schema() AS schema,
            current_user AS user
        `;

    console.log(result);

    // 3. Check existing user
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    // 4. Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // 5. Create user + profile in one transaction
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          email,
          passwordHash,
          role,
        },
      });

      if (role === "JOB_SEEKER") {
        if (!firstName || !lastName) {
          throw new Error("First name and last name are required");
        }

        await tx.jobSeekerProfile.create({
          data: {
            userId: newUser.id,
            firstName,
            lastName,
            jobTitle,
            location,
            resumeUrl,
          },
        });
      }

      if (role === "COMPANY") {
        if (!companyName) {
          throw new Error("Company name is required");
        }

        await tx.companyProfile.create({
          data: {
            userId: newUser.id,
            companyName,
            industry,
            companySize,
            website,
          },
        });
      }

      return newUser;
    });

    // 6. Never return passwordHash
    return res.status(201).json({
      message: "Registration successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "email, password, and role are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (user.role !== role) {
      return res.status(401).json({
        message: "Invalid account type",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}