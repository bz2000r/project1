const express = require("express");
const path = require("path");
const app = express();

// 静的ファイル（CSS、JS、画像など）を提供
app.use(express.static(path.join(__dirname, "public")));

// メインページ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("Visit http://localhost:3000 to see the page");
});