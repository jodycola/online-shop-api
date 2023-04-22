const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timstampes: true }
);

module.exports = mongoose.model("Cart", CartSchema);