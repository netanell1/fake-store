const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{type:String, unique:true, required:true},
    isActive:{type:Boolean, default:true}
})

const categoryModel = mongoose.model("category", categorySchema)

module.exports = categoryModel

