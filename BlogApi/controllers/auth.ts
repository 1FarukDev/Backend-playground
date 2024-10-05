import express, { Request, Response } from 'express';
import { BadRequestError } from '../errors';
import User from '../models/User'
import { StatusCodes } from 'http-status-codes';



const register = async (req: Request, res: Response) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}
const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please Provide email and password')
    }
    res.send('Login user')
}

export { register, login }