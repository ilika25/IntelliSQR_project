import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
