import { NextFunction } from "express";
import { ReqParams, ResJson } from "../types/custom";
import createHttpError from "http-errors";
import Product from "../models/product";
import {
  BrandProductsType,
  ProductBrandsType,
  ProductType,
} from "../types/product.type";
import {
  getProductByModel,
  getProductsByModel,
} from "../services/mongoose/product";

export const getBrandProducts = async (
  req: ReqParams<{ brand: ProductBrandsType }>,
  res: ResJson<{ products: BrandProductsType[] | [] }>,
  next: NextFunction
) => {
  const { brand } = req.params;

  try {
    const products: BrandProductsType[] | [] = await Product.find(
      { brand },
      "-brand -information"
    );

    if (!products)
      throw createHttpError.BadRequest(
        "Could not fetch products. please try again"
      );

    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: ReqParams<{ model: string }>,
  res: ResJson<{ product: ProductType | null }>,
  next: NextFunction
) => {
  const { model } = req.params;
  const modifiedModel = model.replace(/-/g, " ");

  try {
    const product = await getProductByModel(modifiedModel);

    res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
};

export const searchProducts = async (
  req: ReqParams<{ model: string }>,
  res: ResJson<{ products: ProductType[] | null }>,
  next: NextFunction
) => {
  const { model } = req.params;

  const modifiedModel = model.trim().replace(/-/g, " ");

  try {
    const products = await getProductsByModel(modifiedModel);

    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};
