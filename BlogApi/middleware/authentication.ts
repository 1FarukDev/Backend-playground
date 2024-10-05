import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors';
import User from '../models/User';  // Assuming you have a User model

interface JwtPayload {
  userId: string;
  name: string;
}

// Extend the Request interface to include the user property
interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    name: string;
  };
}

const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify JWT token
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Attach the user to the request object for further processing in the routes
    req.user = { userId: payload.userId, name: payload.name };

    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

export default auth;