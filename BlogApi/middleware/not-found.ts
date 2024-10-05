import { Request, Response, NextFunction } from 'express';

// Middleware function to handle 404 Not Found
const notFound = (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).send('Route does not exist');
};

export default notFound;
