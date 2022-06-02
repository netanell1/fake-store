const categoryControllers = require("../DL/controllers/categryControllers")

async function getCategoryById(id) {
    try {
        const category = await categoryControllers.findById(id)
        return category
    } catch (error) {
        throw `no category with id '${id}'`
    }
}

async function getCategries(filter) {
    const categories = await categoryControllers.find(filter)
    if (categories.length === 0) throw "no categories has be found"
    return categories
}

async function createCategory(category) {
    try {
        const newCategory = await categoryControllers.create(category)
        return newCategory
    } catch (error) {
        throw "error creating new category"
    }
}

async function updateCategoryById(id, newData) {
    const category = await getCategoryById(id)
    delete newData._id
    delete newData.isActive
    try {
        const updatedCategory = await categoryControllers.update(id, newData)
        return updatedCategory
    } catch (error) {
        throw "error updating category"
    }
}

async function deleteCategoryById(id) {
    const category = getCategoryById(id)
    try {
        const deletedCategory = await categoryControllers.del(id)
        return `the category with id '${id}' was deleted`
    } catch (error) {
        throw "error deleting category"
    }
}


module.exports = { getCategoryById, getCategries, createCategory, updateCategoryById, deleteCategoryById }