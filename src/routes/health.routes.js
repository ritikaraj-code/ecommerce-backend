import { Router } from "express";

const router = Router();
router.get("/", (req, res) => res.json({ status: "OK", uptime: process.uptime() }));

export default router;
