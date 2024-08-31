const Products = require('../models/products')

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'Products testing route' })
}

const getAllProducts = async (req, res) => {
    const products = await Products.find()
    res.status(200).json({ msg: products, count: products.length })
}

module.exports = {
    getAllProductsStatic, getAllProducts
}