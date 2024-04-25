import { NextFunction, Response } from "express";
import { UserDataRequest } from "../types/auth.types";
import { getUserById } from "../services/mongoose/user";
import { ResJson } from "../types/custom";
import { FavoriteProductType } from "../types/user.types";
import { ProductType } from "../types/product.type";
import { getProductByModel } from "../services/mongoose/product";

export const getFavorites = async (
  req: UserDataRequest,
  res: ResJson<{ favorites: FavoriteProductType[] | [] }>,
  next: NextFunction
) => {
  try {
    const user = await getUserById(req.userData.userId);
    let populatedFavorites: FavoriteProductType[] | [] = [];

    if (user.favorites.length) {
      const populatedUser = await user.populate<{ favorites: ProductType[] }>(
        "favorites"
      );
      populatedFavorites = populatedUser.favorites.map((product) => ({
        _id: product._id,
        brand: product.brand,
        model: product.model,
        image: product.colors[0].image,
      }));
    }

    res.status(200).json({ favorites: populatedFavorites });
  } catch (error) {
    next(error);
  }
};

export const addToFavorites = async (
  req: UserDataRequest<{ model: string }>,
  res: Response,
  next: NextFunction
) => {
  const { model } = req.body;
  try {
    const product = await getProductByModel(model);

    const user = await getUserById(req.userData.userId);

    let method: "add" | "remove" = "add";

    if (user.favorites.includes(product._id)) {
      method = "remove";
      const index = user.favorites.findIndex(
        (fav) => fav._id.toString() === product._id.toString()
      );
      user.favorites.splice(index, 1);
      await user.save();
    } else {
      user.favorites.push(product._id);
      await user.save();
    }

    res.status(200).json({
      message: `${model} ${
        method === "add" ? "added to" : "removed from"
      } your favorites.`,
    });
  } catch (error) {
    next(error);
  }
};
