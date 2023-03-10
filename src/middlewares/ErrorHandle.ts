import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/CustomError';

class ErrorHandle {
  public static handle(
    error: CustomError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status || 500).json({ message: error.message });
    next();
  }
}

export default ErrorHandle;