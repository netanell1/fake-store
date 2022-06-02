const ProductModel = require("../models/productModel")

async function create(product) {
    const newProduct = await ProductModel.create(product)
    return newProduct
}

async function findById(id) {
    try {
        const product = await ProductModel.findById(id)
            .populate({ path: "category", select: ["name"] })
        return product
    } catch (error) {
        throw error
    }
}

async function find(filter = {}) {
    try {
        const product = await ProductModel.find({ ...filter, isActive: true })
            .populate({ path: "category", select: ["name"] })
        if (!product.isActive) throw "error"
        return product
    } catch (error) {
        throw "error"
    }
}

async function del(id) {
    const product = ProductModel.findByIdAndUpdate(id, { isActive: false }, { new: true })
    return product
}

async function update(id, newDate) {
    const product = ProductModel.findByIdAndUpdate(id, newDate, { new: true })
    return product
}

module.exports = { create, findById, find, del, update }

// require("../../db")
// async function read() {
//     const p = await find({ title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" })
//     console.log(p);
// }
// read()
// men's clothing = 62986f596f42e8486ea1db34
// jewelery = 62986f596f42e8486ea1db35
// electronics = 62986f596f42e8486ea1db36
// women's clothing = 62986f596f42e8486ea1db37