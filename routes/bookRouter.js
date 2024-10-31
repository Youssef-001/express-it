const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("This is all the books we have");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.status(200).send(`The requested book id is: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`The requested book is ${bookId} has been reserved`);
});

module.exports = bookRouter;
