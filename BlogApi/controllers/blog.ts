import express, { Request, Response } from 'express';

// Controller to get all blog posts
const getAllBlogPost = async (req: Request, res: Response): Promise<void> => {
    res.send('Get all blog posts');
};

// Controller to get a single blog post by ID
const getSingleBlogPost = async (req: Request, res: Response): Promise<void> => {
    res.send('Get single blog post');
};

// Controller to create a new blog post
const createBlogPost = async (req: Request, res: Response): Promise<void> => {
    res.send('Create new blog post');
};

// Controller to update an existing blog post
const updateBlogPost = async (req: Request, res: Response): Promise<void> => {
    res.send('Update blog post');
};

// Controller to delete a blog post
const deleteBlogPost = async (req: Request, res: Response): Promise<void> => {
    res.send('Delete blog post');
};

// Exporting the controllers
export {
    getAllBlogPost,
    getSingleBlogPost,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
};
