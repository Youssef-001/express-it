const express = require("express");
const path = require("path");
const app = express(); // this is the server

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.use("/books", bookRouter);

app.use("/authors", authorRouter);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "pages/404.html"))
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
