"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
// Schema Validation (Zod)
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
// Login Route
const login = async (req, res) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const user = await prisma.user.findUnique({ where: { email: validatedData.email } });
        if (!user || !(await bcryptjs_1.default.compare(validatedData.password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
    }
    catch (err) {
        return res.status(400).json({ message: "Invalid request", error: err });
    }
};
exports.login = login;
