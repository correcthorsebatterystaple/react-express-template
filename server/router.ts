import express from "express";

const router = express.Router();

router.get("/health", (_, res) => res.send("OK"));

router.get("/trackers");
router.get("/trackers/:id");
router.post("/trackers");
router.get("/trackers/:id/logs");

export default router;
