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

export const getProductsByModel = async (model: string) => {
  const regexPattern = new RegExp(model, "i");
  const products: ProductType[] | null = await Product.find(
    {
      model: regexPattern,
    },
    "model brand"
  );
  if (!products) {
    throw createHttpError.NotFound("Couldn't find products.");
  }
  return products;
};

export const getProductsByIds = async (productIds: string[]) => {
  const products: ProductType[] | null = await Product.find({
    _id: { $in: productIds },
  });
  if (!products) {
    throw createHttpError.NotFound("Couldn't find products.");
  }
  return products;
};
