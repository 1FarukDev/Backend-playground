require('dotenv').config()

const connectDB = require('./db/connect')
const ProductModel = require('./models/products')
const jsonProduct = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await ProductModel.deleteMany()
        await ProductModel.create(jsonProduct)
        console.log('success!!!')
        process.exit(0)
    } catch (error) {
        console.log('Failed')
        process.exit(1)
    }
}