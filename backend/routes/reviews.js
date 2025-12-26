import express from "express";
import Review from "../models/Review.js";
import ReviewLink from "../models/ReviewLink.js";
import crypto from "crypto";

const router = express.Router();

router.get("/", async (_req, res) => {
  const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 });
  res.json(reviews);
});

router.post("/create-link", async (req, res) => {
  try {
    const {
      maxUses = 1,
      expiresInDays = null,
    } = req.body || {};

    const token = crypto.randomBytes(16).toString("hex");

    let expiresAt = null;
    if (expiresInDays) {
      expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + expiresInDays);
    }

    const link = await ReviewLink.create({
      token,
      maxUses,
      expiresAt,
      active: true,
    });

    if (process.env.NODE_ENV === "production") {
      return res.json({
      token: link.token,
      reviewUrl: `https://ajmultiservicesllc.com/review/${link.token}`,
      maxUses: link.maxUses,
      expiresAt: link.expiresAt,
    })};

    //else
    return res.json({
      token: link.token,
      reviewUrl: `http://localhost:5173/review/${link.token}`,
      maxUses: link.maxUses,
      expiresAt: link.expiresAt,
    });
  } catch (err) {
    console.error("CREATE LINK ERROR:", err);
    return res.status(500).json({ error: "Could not create review link" });
  }
});

router.post("/:token", async (req, res) => {
  try {
    console.log("reaches api");
    const { token } = req.params;
    const { name, rating, text } = req.body;

    const link = await ReviewLink.findOne({ token, active: true });

    if (!link) return res.status(404).json({ error: "Invalid link" });
    if (link.expiresAt && link.expiresAt < new Date())
      return res.status(410).json({ error: "Link expired" });
    if (link.uses >= link.maxUses)
      return res.status(403).json({ error: "Usage limit reached" });

    await Review.create({ name, rating, text, token });

    link.uses += 1;
    await link.save();
    res.json({ success: true });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || "Server error" });
  }
});

export default router;