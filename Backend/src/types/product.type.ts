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

export enum ProductBrandsType {
  Mac = "Mac",
  iPhone = "iPhone",
  AirPods = "AirPods",
}

export type ProductType = {
  _id: string;
  brand: ProductBrandsType;
  model: string;
  colors: ProductColorType[];
  information: ProductInformationType;
  options: ProductOptionType[];
};

// export type BrandProductsColorType = {
//   _id: string;
//   hex: string;
// };

export type BrandProductsType = {
  _id: string;
  // image: string;
  model: string;
  colors: ProductColorType[];
  options: ProductOptionType[];
};
