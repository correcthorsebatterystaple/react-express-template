import express from "express";

const router = express.Router();

router.get("/health", (_, res) => res.send("OK"));

export default router;
