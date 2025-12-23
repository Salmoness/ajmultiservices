import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    text: { type: String, required: true },
    approved: { type: Boolean, default: false },
    token: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);