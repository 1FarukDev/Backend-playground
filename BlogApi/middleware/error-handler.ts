import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

interface CustomError {
  statusCode: number;
  msg: string;
}

// Define a more specific type for validation errors
interface ValidationError {
  message: string;
}

// Middleware for handling errors
const errorHandlerMiddleware = (
  err: any, // You might create a more specific type for your errors
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let CustomError: CustomError = {
    // Set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later',
  };

  // Handle validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((item) => {
      // Assert item as ValidationError
      const validationError = item as ValidationError; 
      return validationError.message;
    });
    CustomError.msg = messages.join(',');
    CustomError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Handle duplicate key error
  if (err.code && err.code === 11000) {
    CustomError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value.`;
    CustomError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Handle cast errors (invalid ObjectId)
  if (err.name === 'CastError') {
    CustomError.msg = `No item found with id: ${err.value}`;
    CustomError.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(CustomError.statusCode).json({ msg: CustomError.msg });
};

export default errorHandlerMiddleware;
