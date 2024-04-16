import { NextFunction, Response } from "express";
import { getUserById } from "../services/mongoose/user";
import { UserDataRequest } from "../types/auth.types";
import { CartProductType, PopulatedCartType } from "../types/cart.types";
import { ResJson } from "../types/custom";
import { getProductByModel } from "../services/mongoose/product";
import createHttpError from "http-errors";
import { ProductType } from "../types/product.type";

const createCartItem = (
  product: ProductType,
  colorId: string,
  optionId: string
) => ({
  product: product._id,
  option: product.options.find((option) => option._id.toString() === optionId),
  color: product.options.find((color) => color._id.toString() === colorId),
});

export const getCart = async (
  req: UserDataRequest,
  res: ResJson<{ cart: CartProductType[] | [] }>,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);
    let populatedCart: CartProductType[] | [] = [];
    if (user.cart.length) {
      const populatedUser = await user.populate<{ cart: PopulatedCartType[] }>(
        "cart.product"
      );
      populatedCart = populatedUser.cart.map(({ product, option, color }) => ({
        _id: product._id,
        brand: product.brand,
        model: product.model,
        option: option,
        color: color,
      }));
    }

    res.status(200).json({ cart: populatedCart });
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (
  req: UserDataRequest<{ model: string; colorId: string; optionId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { model, colorId, optionId } = req.body;
  try {
    const product = await getProductByModel(model);

    const user = await getUserById(req.userData.userId);

    const productExist = user.cart.some((item) => item.product === product._id);

    if (productExist) {
      throw createHttpError.NotFound("Product already in your cart.");
    } else {
      const cartItem = createCartItem(product, colorId, optionId);
      user.cart.push(cartItem);
      await user.save();
    }

    res.status(200).json({ message: `${model} added to your cart.` });
  } catch (error) {
    next(error);
  }
}; //! Test Required

export const removeFromCart = async (
  req: UserDataRequest<{ model: string }>,
  res: Response,
  next: NextFunction
) => {
  const { model } = req.body;
  try {
    const product = await getProductByModel(model);

    const user = await getUserById(req.userData.userId);

    const index = user.cart.findIndex(
      (item) => item.product.toString() === product._id.toString()
    );

    if (index !== -1) {
      user.cart.splice(index, 1);
      await user.save();
    } else {
      throw createHttpError.NotFound(`${model} not found in your cart.`);
    }

    res.status(200).json({ message: `${model} removed from your cart.` });
  } catch (error) {
    next(error);
  }
}; //! Test Required

export const checkout = async (req: Request, res: Response) => {};

export const getOrders = async (
  req: UserDataRequest,
  res: ResJson<{ orders: CartProductType[] | [] }>,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);
    let populatedOrders: CartProductType[] | [] = [];

    if (user.orders.length) {
      const populatedUser = await user.populate<{
        orders: PopulatedCartType[];
      }>("orders.product");
      populatedOrders = populatedUser.orders.map(
        ({ product, option, color }) => ({
          _id: product._id,
          brand: product.brand,
          model: product.model,
          option: option,
          color: color,
        })
      );
    }

    res.status(200).json({ orders: populatedOrders });
  } catch (error) {
    next(error);
  }
};
