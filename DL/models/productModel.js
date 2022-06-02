const mongoose = require("mongoose")
// const category = require("./categoryModel")

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId, ref: "category" },
    image: { type: String },
    rating: {
        rate: { type: Number },
        count: { type: Number }
    },
    isActive: { type: Boolean, default: true }
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel

