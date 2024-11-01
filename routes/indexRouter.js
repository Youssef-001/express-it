const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

const indexPath = "P:\\Node_projects\\express-it\\public\\pages\\index.html";
const aboutPath = "P:\\Node_projects\\express-it\\public\\pages\\about.html";
const contactPath =
  "P:\\Node_projects\\express-it\\public\\pages\\contact-me.html";
const errorPath = "P:\\Node_projects\\express-it\\public\\pages\\404.html";
indexRouter.get("/", (req, res) => {
  res.render(index, {});
});

// indexRouter.get("/about", (req, res) => res.sendFile(aboutPath));
indexRouter.get("/about", (req, res) => res.render("about", {}));

indexRouter.get("/contact-me", (req, res) => res.render("contact-me", {}));

module.exports = indexRouter;
