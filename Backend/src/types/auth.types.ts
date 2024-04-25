import { Request } from "express";
import { ObjectId, Types } from "mongoose";
import { ReqBody } from "./custom";
import { CartSchemaType, OrderSchemaType } from "./cart.types";

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

export type UserType = {
  _id: Types.ObjectId;
  email: string;
  password: string;
  cart: CartSchemaType;
  favorites: ObjectId[];
  orders: OrderSchemaType;
};
