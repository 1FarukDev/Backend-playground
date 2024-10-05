import express, { Router } from 'express';
import { 
    getAllBlogPost,
    getSingleBlogPost,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost 
} from '../controllers/blog';

const router: Router = Router();

// Define routes
router.route('/').post(createBlogPost).get(getAllBlogPost);
router.route('/:id').get(getSingleBlogPost).delete(deleteBlogPost).patch(updateBlogPost);

// Export the router
export default router;
