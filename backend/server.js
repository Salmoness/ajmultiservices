import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import "dotenv/config";
import reviewRoutes from "./routes/reviews.js";
import cors from "cors";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = [
  "https://ajmultiservicesllc.com",
  "https://www.ajmultiservicesllc.com",
  "http://localhost:5173"
];

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use("/api/reviews", reviewRoutes);
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../ajmultiservices/dist")));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../ajmultiservices/dist/index.html"));
  });
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on http://127.0.0.1:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Mongo connection error:", err);
  });