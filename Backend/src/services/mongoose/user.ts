import createHttpError from "http-errors";
import User from "../../models/user";

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw createHttpError.NotFound("Couldn't find user.");
  }
  return user;
};

export const getUserByEmail = async (email: string) => User.findOne({ email });

export const createUser = async (email: string, hashedPassword: string) =>
  new User({
    email: email.trim().toLowerCase(),
    password: hashedPassword,
  }).save();
