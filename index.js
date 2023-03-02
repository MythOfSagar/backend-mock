const { connection } = require("./config/db");
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const {wordRouter}=require('./routes/word.route');
const { userRouter } = require("./routes/user.route");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/word",wordRouter)
app.use("/user",userRouter) 

app.get('/',(req,res)=>{
  res.send("HOME")
})

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log(`Error because of ${err}`);
  }
});
