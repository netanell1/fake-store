
const CategoryModel = require("../models/categoryModel")

async function create(category) {
    const newCategory = await CategoryModel.create(category)

    return newCategory
}


async function findById(id) {
    try {
        const category = await CategoryModel.findById(id)
        if (!category.isActive) throw "error"
        return category
    } catch (error) {
        throw error
    }
}

async function find(filter = {}) {
    const category = await CategoryModel.find({ ...filter, isActive: true })
    return category
}

async function del(id) {
    const category = await CategoryModel.findByIdAndUpdate(id, { isActive: false }, { new: true })
    return category
}

async function update(id, newData) {
    const apdatedCategory = await CategoryModel.findByIdAndUpdate(id, newData, { new: true })
    return apdatedCategory
}

module.exports = { create, find, findById, del, update }