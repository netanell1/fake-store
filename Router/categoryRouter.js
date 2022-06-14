const categoryBL = require("../BL/categoryBL")

function Router(app) {

    app.get(`/category`, async (req, res) => {
        try {
            const category = await categoryBL.getCategoryById(req.query.id)
            res.status(200).send(category)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.get(`/categories`, async (req, res) => {
        console.log(req.query);
        try {
            const categories = await categoryBL.getCategries( req.query)
            res.status(200).send(categories)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.post(`/category/add`, async (req, res) => {
        try {
            const category = await categoryBL.createCategory(req.body)
            res.status(200).send(category)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.put(`/category`, async (req, res) => {
        try {
            const category = await categoryBL.updateCategoryById(req.query.id, req.body)
            res.status(200).send(category)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.delete(`/category`, async (req, res) => {
        try {
            const category = await categoryBL.deleteCategoryById(req.query.id)
            res.status(200).send(category)
        } catch (error) {
            res.status(400).send(error)
        }
    })


}

module.exports = Router