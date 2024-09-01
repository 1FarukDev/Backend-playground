const Products = require('../models/products')

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'Products testing route' })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    const products = await Products.find(queryObject)
    res.status(200).json({ products, count: products.length })
}

module.exports = {
    getAllProductsStatic, getAllProducts
}