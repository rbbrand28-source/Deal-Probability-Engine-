import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/error.middleware";
import authRoutes from "./modules/auth/auth.routes";
import prospectRoutes from "./modules/prospect/prospect.routes";
import recommendationRoutes from "./modules/recommendation/recommendation.routes";
import feedbackRoutes from "./modules/feedback/feedback.routes";
import adminRoutes from "./modules/admin/admin.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/prospects", prospectRoutes);
app.use("/recommendations", recommendationRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/admin", adminRoutes);

app.use(errorHandler);

export default app;
