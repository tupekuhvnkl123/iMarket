//// Packages
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import createHttpError from "http-errors";
import { NextFunction, Response } from "express";
import { UserDataRequest } from "../types/auth.types";
dotenv.config();

export default async (
  req: UserDataRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw createHttpError.Unauthorized("Authentication failed.");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY!);

    if (typeof decodedToken !== "object" || !decodedToken.userId) {
      throw createHttpError.BadRequest("Invalid token format.");
    }
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    return next(err);
  }
};
