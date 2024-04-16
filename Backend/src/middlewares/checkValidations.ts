import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";

const checkValidations = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw createHttpError.BadRequest("Invalid inputs.");
  }
  next();
};

export default checkValidations;
