import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const notFound = (_req: Request, res: Response) => {
  res.status(400).json({message: "Route not found"})
}

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err);
  const status = (err as any)?.status || 500; 
  const message = (err as any)?.status || 'internal server  erorr'
  res.status(status).json({message})
}