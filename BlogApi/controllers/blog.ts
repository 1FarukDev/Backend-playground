import express, { Request, Response } from 'express';

const getAllBlogPost = async (req: Request, res: Response) => {
    res.send('get all blog')
}

const getSingleBlogPost = async (req: Request, res: Response) => {
    res.send('get single blog')
}

const createBlogPost = async (req: Request, res: Response) => {
    res.send('create new blog')
}

const updateBlogPost = async (req: Request, res: Response) => {
    res.send('update blog')
}

const deleteBlogPost = async (req: Request, res: Response) => {
    res.send('delete blog post')
}

module.exports = {
    getAllBlogPost,
    getSingleBlogPost,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
}