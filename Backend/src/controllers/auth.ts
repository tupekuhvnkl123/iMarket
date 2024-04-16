import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcryptjs";
import { ReqBody, ResJson } from "../types/custom";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/mongoose/user";
import {
  AuthReqBody,
  ChangePasswordRequest,
  LoginRes,
  UserDataRequest,
} from "../types/auth.types";
import { createToken } from "../services/jwt/createToken";

export const register = async (
  req: ReqBody<AuthReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const emailExist = await getUserByEmail(email);

    if (emailExist) {
      throw createHttpError.BadRequest("Email already exist.");
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 12);

    const newUser = await createUser(email, hashedPassword);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: ReqBody<AuthReqBody>,
  res: ResJson<{ user: LoginRes }>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if (!user) {
      throw createHttpError.NotFound("Wrong email.");
    }

    const passwordIsValid = await bcrypt.compare(password, user.password!);
    if (!passwordIsValid) {
      throw createHttpError.BadRequest("Wrong password.");
    }

    const token = createToken(user._id);

    const userResponse = {
      id: user._id,
      email: user.email!,
      token,
    };

    res.status(200).json({ user: userResponse });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: ChangePasswordRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password } = req.body;

    const user = await getUserById(req.userData.userId);

    const hashedPassword = await bcrypt.hash(password, 12);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Your password has been updated." });
  } catch (error) {
    next(error);
  }
}; //! Test required

export const deleteAccount = async (
  req: UserDataRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);

    await user.deleteOne();
  } catch (error) {
    next(error);
  }
}; //! Test required

// export const logout = async (req: Request, res: Response) => {};
