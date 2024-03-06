export type ProductColorType = {
  _id: string;
  name: string;
  hex: string;
  image: string;
};

export type ProductInformationType = {
  width: string;
  height: string;
  depth: string;
  weight: string;
};

export type ProductOptionType = { capacity: string; price: number };

export type ProductBrandsType = "Mac" | "iPhone" | "AirPods";

export type ProductType = {
  _id: string;
  brand: ProductBrandsType;
  model: string;
  colors: ProductColorType[];
  information: ProductInformationType;
  options: ProductOptionType[];
};

export type ProductPageImagesType = {
  preview: string;
  bubbles: string;
  background: string;
  info: string[];
  bottom?: string;
};
