import { ZodError, ZodTypeAny } from 'zod';

import { Request, Response, NextFunction } from 'express';

export const validate =
  (schema: ZodTypeAny) =>
  (req : Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ message: 'Validation error', issues: (err as ZodError).flatten?.() ?? err });
      }
      next(err);
    }
  };