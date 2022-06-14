const productBL = require("../BL/productBL")

function Router(app) {

    app.get(`/product`, async (req, res) => {
        try {
            const product = await productBL.getProductById(req.query.id)
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.get(`/products`, async (req, res) => {
        try {
            const products = await productBL.getProducts(req.query)
            res.status(200).send(products)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.get(`/products/category`, async (req, res) => {
        try {
            const products = await productBL.getProductsByCategoryName(req.query.category)
            res.status(200).send(products)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.post(`/product/add`, async (req, res) => {
        try {
            const product = await productBL.createProduct(req.body)
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.put(`/product`, async (req, res) => {
        try {
            const product = await productBL.updateProductById(req.query.id, req.body)
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.delete(`/product`, async (req, res) => {
        try {
            const product = await productBL.deleteProductById(req.query.id)
            res.status(200).send(product)
        } catch (error) {
            res.status(400).send(error)
        }
    })


}

module.exports = Router