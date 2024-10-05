import express, { Router } from 'express';
import authenticateMiddleware from '../middleware/authentication'
import {
    getAllBlogPost,
    getSingleBlogPost,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
} from '../controllers/blog';

const router: Router = Router();

// Define routes
router.route('/').get(getAllBlogPost);

// Protected routes: Only authenticated users can create, update, or delete posts
router.route('/').post(authenticateMiddleware, createBlogPost);
router.route('/:id')
    .get(getSingleBlogPost)  // This can also be public if needed
    .patch(authenticateMiddleware, updateBlogPost)
    .delete(authenticateMiddleware, deleteBlogPost);

// Export the router
export default router;
