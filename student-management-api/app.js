const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

app.use("/students", studentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});