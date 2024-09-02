const Products = require('../models/products')

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'Products testing route' })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort } = req.query
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

    let result = Products.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }
    const products = await result
    res.status(200).json({ products, count: products.length })
}

module.exports = {
    getAllProductsStatic, getAllProducts
}