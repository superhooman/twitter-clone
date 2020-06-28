require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");
const twitRoute = require("./routes/twit");

const app = express();

app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/twit", twitRoute);

mongoose.connect(process.env.DB_CONNECT);

app.listen(process.env.PORT, () => {
    console.log("Server started")
});