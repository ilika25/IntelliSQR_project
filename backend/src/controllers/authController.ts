// controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Schema Validation (Zod)
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Login Route Handler
export const login = async (req: Request, res: Response) => {
    try {
        // Validate the request data
        const validatedData = loginSchema.parse(req.body);

        // Find the user by email
        const user = await prisma.user.findUnique({ where: { email: validatedData.email } });

        // Check if user exists and password is correct
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

        // Send the token response
        console.log(`Login successful for user: ${user.email}`);
        res.status(200).json({ token }); // Removed return
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Invalid request", error: err instanceof Error ? err.message : err });
    }
};