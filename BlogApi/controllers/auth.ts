import express, { Request, Response } from 'express';
const register = async (req: Request, res: Response) => {
    res.send('register user')
}
const login = async (req:Request, res:Response) => {
    res.send('Login user')
}

module.exports = {
    register,
    login
}