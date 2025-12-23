import mongoose from "mongoose";

const ReviewLinkSchema = new mongoose.Schema(
  {
    token: { type: String, unique: true },
    maxUses: { type: Number, default: 1 },
    uses: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    expiresAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("ReviewLink", ReviewLinkSchema);