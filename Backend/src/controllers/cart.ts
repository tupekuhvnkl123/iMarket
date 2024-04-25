import { NextFunction, Response } from "express";
import { getUserById } from "../services/mongoose/user";
import { UserDataRequest } from "../types/auth.types";
import { CartSchemaType, OrderSchemaType } from "../types/cart.types";
import { ResJson } from "../types/custom";
import { getProductByModel } from "../services/mongoose/product";
import createHttpError from "http-errors";
import { ProductType } from "../types/product.type";
import {
  checkPaymentById,
  createCheckoutSession,
} from "../services/stripe/checkout";

const createCartItem = (
  product: ProductType,
  colorId: string,
  optionId: string
) => ({
  productId: product._id,
  model: product.model,
  option: product.options.find((option) => option._id.toString() === optionId),
  color: product.colors.find((color) => color._id.toString() === colorId),
});
const checkSameProductOption = (
  colorId: string,
  optionId: string,
  product: ProductType,
  userCart: CartSchemaType
) => {
  const productExist = userCart.some(
    (item) => item.productId.toString() === product._id.toString()
  );
  const selectedProductOption = product.options.find(
    ({ _id }) => _id.toString() === optionId
  );
  const sameOptionExist = userCart.some(
    ({ option }) =>
      option.capacity.toString() === selectedProductOption?.capacity.toString()
  );
  const selectedProductColor = product.colors.find(
    ({ _id }) => _id.toString() === colorId
  );
  const sameColorExist = userCart.some(
    ({ color }) => color.hex.toString() === selectedProductColor?.hex.toString()
  );

  return productExist && sameColorExist && sameOptionExist;
};

export const getCart = async (
  req: UserDataRequest,
  res: ResJson<{ cart: CartSchemaType }>,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);

    res.status(200).json({ cart: user.cart });
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

    const sameOptionsChosen = checkSameProductOption(
      colorId,
      optionId,
      product,
      user.cart
    );
    const modelName = model.replace(/-/g, " ");

    if (sameOptionsChosen) {
      throw createHttpError[403](
        `${modelName} with the same options already in your cart.`
      );
    } else {
      const cartItem = createCartItem(product, colorId, optionId);
      user.cart.push(cartItem);
      await user.save();
    }

    res.status(200).json({ message: `${modelName} added to your cart.` });
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (
  req: UserDataRequest<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  try {
    const user = await getUserById(req.userData.userId);

    const index = user.cart.findIndex(({ _id }) => {
      return _id?.toString() === id.toString();
    });

    if (index !== -1) {
      user.cart.splice(index, 1);
      await user.save();
    } else {
      throw createHttpError.NotFound("Product not found in your cart.");
    }

    res.status(200).json({ message: "Product removed from your cart." });
  } catch (error) {
    next(error);
  }
};

export const checkout = async (
  req: UserDataRequest,
  res: ResJson<{ checkoutUrl: string | null; stripeOrderId: string }>,
  next: NextFunction
) => {
  const user = await getUserById(req.userData.userId);

  try {
    const checkoutSession = await createCheckoutSession(user.cart);

    res.status(201).json({
      checkoutUrl: checkoutSession.url,
      stripeOrderId: checkoutSession.id,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (
  req: UserDataRequest,
  res: ResJson<{ orders: OrderSchemaType }>,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);

    res.status(200).json({ orders: user.orders });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (
  req: UserDataRequest,
  res: Response,
  next: NextFunction
) => {
  const { stripeOrderId } = req.body;
  try {
    const user = await getUserById(req.userData.userId);

    const orderAlreadyExist = user.orders.some(
      (order) => order.stripeOrderId === stripeOrderId
    );
    if (orderAlreadyExist) {
      throw createHttpError.BadRequest("Order already created.");
    }

    await checkPaymentById(stripeOrderId);

    const newOrders = user.cart.map(({ color, option, model, productId }) => {
      const order = {
        color,
        option,
        model,
        productId,
        stripeOrderId,
      };
      user.orders.push(order);
      return order;
    });

    user.set({ cart: [] });
    await user.save();

    res.status(200).json({ order: newOrders });
  } catch (error) {
    next(error);
  }
};
