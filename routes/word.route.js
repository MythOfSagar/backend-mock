const { Router } = require("express");

const wordRouter = Router();

wordRouter.get("/", (req, res) => {
  const N = Math.floor(Math.random() * 4) + 1;
  const letters = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomWord = "";
  for (let i = 0; i < N + 3; i++) {
    const I = Math.floor(Math.random() * 26) + 1;
    randomWord += letters[I];
  }

  res.send({"word":randomWord});
});

module.exports = { wordRouter };
