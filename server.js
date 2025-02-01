const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json()); // For parsing application/json

// Serve the tasks from tasks.json
app.get("/tasks", (req, res) => {
  const filePath = path.join(__dirname, "tasks.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading tasks file" });
    }
    res.json(JSON.parse(data));
  });
});

// Add or update tasks in tasks.json
app.post("/tasks", (req, res) => {
  const filePath = path.join(__dirname, "tasks.json");
  const newTasks = req.body;

  fs.writeFile(filePath, JSON.stringify(newTasks, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error saving tasks" });
    }
    res.json({ message: "Tasks saved successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
