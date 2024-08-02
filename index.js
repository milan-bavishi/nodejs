const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
