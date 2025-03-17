const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get("https://findwork.dev/api/jobs/", {
      headers: {
        Authorization: `Token 9f80308286177113e05064dfee2c75a3ba64c561`, // Replace with your API key
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});