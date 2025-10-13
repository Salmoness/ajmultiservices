import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static React build files
app.use(express.static(path.join(__dirname, "../ajmultiservices/dist")));

// React Router handles all other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../ajmultiservices/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`AJ Multiservices running on port ${PORT}`);
});