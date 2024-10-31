const express = require("express");
const path = require("path");
const app = express(); // this is the server

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "pages/index.html"))
);

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "pages/about.html"))
);
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "pages/contact-me.html"))
);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "pages/404.html"))
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
