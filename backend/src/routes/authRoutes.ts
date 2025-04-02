import express from "express";
import { login} from "../controllers/authController"; // Import both functions

const router = express.Router();

router.post("/login", login); // Include register route

export default router;
