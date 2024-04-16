import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Types } from "mongoose";
dotenv.config();

export const createToken = (userId: Types.ObjectId) => {
  const token = jwt.sign({ userId }, process.env.JWT_PRIVATE_KEY!, {
    expiresIn: "3d",
  });
  return token;
};
