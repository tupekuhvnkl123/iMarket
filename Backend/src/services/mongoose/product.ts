import createHttpError from "http-errors";
import Product from "../../models/product";
import { ProductType } from "../../types/product.type";

export const getProductByModel = async (model: string) => {
  const product: ProductType | null = await Product.findOne({ model });
  if (!product) {
    throw createHttpError.NotFound("Couldn't find product.");
  }
  return product;
};
