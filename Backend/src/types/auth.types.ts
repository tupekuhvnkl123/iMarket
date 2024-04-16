import { Request } from "express";
import { Types } from "mongoose";
import { ReqBody } from "./custom";

export type UserDataRequest<T = any> = Request<any, any, T> & {
  userData: {
    userId: string;
  };
};

export type AuthReqBody = {
  email: string;
  password: string;
};

export type LoginRes = {
  id: Types.ObjectId;
  email: string;
  token: string;
};

export type ChangePasswordRequest = ReqBody<{ password: string }> &
  UserDataRequest;
