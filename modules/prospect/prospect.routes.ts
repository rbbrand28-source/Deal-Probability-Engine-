import { Router } from "express";
import { addProspect } from "./prospect.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, addProspect);

export default router;
