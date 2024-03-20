import { NextFunction, Request, Response } from "express";
import { ReqParams, ResJson } from "../types/custom";
import createHttpError from "http-errors";
import Product from "../models/product";
import {
  BrandProductsType,
  ProductBrandsType,
  ProductType,
} from "../types/product.type";

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
    const product: ProductType | null = await Product.findOne({
      model: modifiedModel,
    });

    if (!product) throw createHttpError.BadRequest("Product not found.");

    res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
};
