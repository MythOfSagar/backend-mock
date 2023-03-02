const { Router } = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  const { userData } = req.body;
 
  try {
    const newUser = UserModel({ ...userData });
    await newUser.save();
    console.log(newUser);
    res.send("Details set Successfully");
  } catch (err) {
    res.send("Error");
  }
});

module.exports = { userRouter };
 