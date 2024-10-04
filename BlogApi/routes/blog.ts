const express = require('express')
const router = express.Router()


const { getAllBlogPost,
    getSingleBlogPost,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost } = require('../controllers/blog')

router.route('/').post(createBlogPost).get(getAllBlogPost)
router.route('/:id').get(getSingleBlogPost).delete(deleteBlogPost).patch(updateBlogPost)

module.exports = router