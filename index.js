const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./routes/product");

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

app.use(express.json());
app.use("/api/producst", productRouter);


app.listen(process.env.PORT || 4000, () => {
    console.log("Backend server is running!");
});

