import {
  ProductBrandsType,
  ProductPageImagesType,
} from "../components/Pages/ProductPage/ProductPage.types";
import { ProductsPageStaticDataType } from "../components/Pages/ProductsPage/ProductsPage.types";
import { HomeGalleryDataType } from "../components/Home/Home.types";

export const appRoutes = {
  Home: "home",
  Mac: "mac",
  iPhone: "iphone",
  AirPods: "airpods",
};

export const homePageProductGallery: HomeGalleryDataType = {
  mappedProducts: [
    {
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_avif,q_auto/v1707824074/iMarket/Pages/HomePage/Iphones.jpg",
    },
    {
      title: "iPhone",
      route: "iphone",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_avif,q_auto/v1708012810/iMarket/Pages/HomePage/Iphone.png",
    },
    {
      title: "AirPods",
      route: "airpods",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_avif,q_auto/v1707824074/iMarket/Pages/HomePage/AirPods.jpg",
    },
    {
      title: "Mac",
      route: "mac",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_avif,q_auto/v1707824074/iMarket/Pages/HomePage/Mac.jpg",
    },
  ],
  iPhone15: {
    title: "iPhone 15 Titanium",
    route: "iphone-15",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708262350/iMarket/Pages/HomePage/iPhone_15_Titanium.png",
  },
  airPodsMax: {
    title: "AirPods Max",
    route: "airpods-max",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824074/iMarket/Pages/HomePage/AirPods_Max.jpg",
  },
};

export const macProductsPageData: ProductsPageStaticDataType = {
  title: ProductBrandsType.Mac,
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708524217/iMarket/Pages/MacPage/mac_background.jpg",
  previewImage:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824075/iMarket/Pages/MacPage/Mac.png",
};
export const iPhoneProductsPageData: ProductsPageStaticDataType = {
  title: ProductBrandsType.iPhone,
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708503876/iMarket/Pages/IphonesPage/Iphone_Background.jpg",
  previewImage:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824074/iMarket/Pages/IphonesPage/Iphone.png",
};
export const airPodsProductsPageData: ProductsPageStaticDataType = {
  title: ProductBrandsType.AirPods,
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708523910/iMarket/Pages/AirPodsPage/airpods_background.jpg",
  previewImage:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824072/iMarket/Pages/AirPodsPage/AirPods.png",
};

export const iPhoneProductPageImages: ProductPageImagesType = {
  preview:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709196575/iMarket/ProductPages/Iphone/Iphones_colors.png",
  bubbles:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824077/iMarket/ProductPages/Iphone/Bubbles.png",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708523910/iMarket/Pages/AirPodsPage/airpods_background.jpg",
  info: [
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709022842/iMarket/ProductPages/Iphone/Additional1.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824078/iMarket/ProductPages/Iphone/Additional2.png",
  ],
};
export const macProductPageImages: ProductPageImagesType = {
  preview:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709044603/iMarket/ProductPages/Mac/MacBooks_colors.png",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824079/iMarket/ProductPages/Mac/Background.jpg",
  info: [
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824077/iMarket/ProductPages/Mac/Additional1.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824078/iMarket/ProductPages/Mac/Additional3.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824077/iMarket/ProductPages/Mac/Additional2.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824078/iMarket/ProductPages/Mac/Additional4.png",
  ],
  bubbles:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824076/iMarket/ProductPages/AirPods/Bubbles.png",
};

export const iMacProductPageImages: ProductPageImagesType = {
  preview:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824077/iMarket/ProductPages/iMac/iMac_colors.png",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824078/iMarket/ProductPages/iMac/Background.jpg",
  info: [
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709125010/iMarket/ProductPages/iMac/Additional1.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709125010/iMarket/ProductPages/iMac/Additional2.png",
  ],
  bubbles:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824076/iMarket/ProductPages/AirPods/Bubbles.png",
};
export const airPodsProductPageImages: ProductPageImagesType = {
  preview:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824076/iMarket/ProductPages/AirPods/AirPods.png",
  bubbles:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824076/iMarket/ProductPages/AirPods/Bubbles.png",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824075/iMarket/ProductPages/AirPods/Background.webp",
  info: [
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709125521/iMarket/ProductPages/AirPods/Additional1.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824076/iMarket/ProductPages/AirPods/Additional2.png",
  ],
};
export const airPodsMaxProductPageImages: ProductPageImagesType = {
  preview:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1709130950/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/AirPodsMax_colors.png",
  bubbles:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/Bubbles.png",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824082/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/Background.jpg",
  info: [
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824079/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/Additional1.png",
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824079/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/Additional2.png",
  ],
  bottom:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/ProductPages/%E2%80%8F%E2%80%8FAirPodsMax/Bottom.png",
};
