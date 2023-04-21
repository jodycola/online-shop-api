const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Successful"))
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Test is successful");
});


app.listen(process.env.PORT || 4000, () => {
    console.log("Backend server is running!");
});

