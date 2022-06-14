
const productControllers = require("../DL/controllers/productControllers")
const categoryControllers = require("../DL/controllers/categryControllers")
async function getProductById(id) {
    try {
        const product = await productControllers.findById(id)
        return product
    } catch (error) {
        throw `no product with id '${id}'`
    }
}

async function getProducts(filter) {
    const products = await productControllers.find(filter)
    if (products.length === 0) throw "no products has be found"
    return products
}

async function getProductsByCategoryName(categoryName) {
    const category = await categoryControllers.find({ name: categoryName })
    const products = await productControllers.find({ category: category[0]._id })
    if (products.length === 0) throw "no products has be found"
    return products
}

async function createProduct(product) {
    try {
        const newProduct = await productControllers.create(product)
        return newProduct
    } catch (error) {
        throw "error creating new product"
    }
}

async function updateProductById(id, newData) {
    const product = await getProductById(id)
    delete newData._id
    delete newData.isActive
    try {
        const updatedProduct = await productControllers.update(id, newData)
        return updatedProduct
    } catch (error) {
        throw "error updating product"
    }
}

async function deleteProductById(id) {
    const product = getProductById(id)
    try {
        const deletedProduct = await productControllers.del(id)
        return `the product with id '${id}' was deleted`
    } catch (error) {
        throw "error deleting product"
    }
}


module.exports = { getProductById, getProducts, createProduct, updateProductById, deleteProductById, getProductsByCategoryName }