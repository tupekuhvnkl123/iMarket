import {
  ProductPageImagesType,
  ProductType,
} from "../components/Pages/ProductPage/ProductPage.types";
import { ProductsPageStaticDataType } from "../components/Pages/ProductsPage/ProductsPage.types";
import { HomeGalleryDataType } from "../components/Home/Home.types";
import { FavoriteProductType } from "../components/Layouts/Drawer/Favorites/Favorites.types";
import { CartProductType } from "../components/Layouts/Drawer/Cart/Cart.types";
import { OrderProductType } from "../components/Layouts/Drawer/Orders/Orders.types";

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
  title: "Mac",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708524217/iMarket/Pages/MacPage/mac_background.jpg",
  previewImage:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824075/iMarket/Pages/MacPage/Mac.png",
};
export const iPhoneProductsPageData: ProductsPageStaticDataType = {
  title: "iPhone",
  background:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1708503876/iMarket/Pages/IphonesPage/Iphone_Background.jpg",
  previewImage:
    "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824074/iMarket/Pages/IphonesPage/Iphone.png",
};
export const airPodsProductsPageData: ProductsPageStaticDataType = {
  title: "AirPods",
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
//////////////////////////////////////////////////////////////////

export const DUMMY_FAVORITES: FavoriteProductType[] = [
  {
    _id: "dasfasdasfasdasd",
    brand: "iPhone",
    model: "iPhone 11",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824082/iMarket/Products/Iphones/11/black.png",
  },
  {
    _id: "dasfasdasfsasdasd",
    brand: "iPhone",
    model: "iPhone 13",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2014/spacegray.png",
  },
  {
    _id: "dasfasdasfasdahsd",
    brand: "iPhone",
    model: "iPhone 15",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/Products/AirPods/Airpods/airpods_2gen.png",
  },
  {
    _id: "dasfaasasdasfasdahsd",
    brand: "iPhone",
    model: "iPhone 15",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824119/iMarket/Products/Mac/iMac/silver.png",
  },
];

export const DUMMY_CART: CartProductType[] = [
  {
    _id: "dasfasdasfasdasd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824082/iMarket/Products/Iphones/11/black.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfassdasd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824119/iMarket/Products/Mac/iMac/silver.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfasdahsd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/Products/AirPods/Airpods/airpods_2gen.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfaggsdahsd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2014/spacegray.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
];
export const DUMMY_ORDERS: OrderProductType[] = [
  {
    _id: "dasfasdasfasdasd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824082/iMarket/Products/Iphones/11/black.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfassdasd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824119/iMarket/Products/Mac/iMac/silver.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfasdahsd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/Products/AirPods/Airpods/airpods_2gen.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
  {
    _id: "dasfasdasfaggsdahsd",
    brand: "iPhone",
    model: "iPhone 11",
    option: {
      capacity: "256GB",
      price: 699,
    },
    color: {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2014/spacegray.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
  },
];

export const DUMMY_PRODUCT: ProductType = {
  _id: "6554dasdd12c9a121549e2d541",
  brand: "iPhone",
  model: "iPhone 11",
  colors: [
    {
      name: "Yellow",
      hex: "FFFF00",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824119/iMarket/Products/Mac/iMac/silver.png",
      _id: "65cb54d12c9a121549e2d41",
    },
    {
      name: "Purple",
      hex: "BF40BF",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824080/iMarket/Products/AirPods/Airpods/airpods_2gen.png",
      _id: "65cb54d12c9a1dsd21549ed541",
    },
    {
      name: "Black",
      hex: "000000",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824082/iMarket/Products/Iphones/11/black.png",
      _id: "65c54d12c9asdga121549e2d541",
    },
    {
      name: "White",
      hex: "ffffff",
      image:
        "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2014/spacegray.png",
      _id: "65cb54d1c9asdga121549e2d541",
    },
  ],
  information: {
    width: "2.98 inches (75.7 mm)",
    height: "5.94 inches (150.9 mm)",
    depth: "0.33 inch (8.3 mm)",
    weight: "6.84 ounces (194 grams)",
  },
  options: [
    {
      capacity: "256GB",
      price: 699,
    },
    {
      capacity: "1TB",
      price: 799,
    },
    {
      capacity: "2TB",
      price: 899,
    },
  ],
};

export const DUMMY_PRODUCTS = [
  {
    _id: "0",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "1",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "2",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "3",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "4",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "5",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "6",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "7",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "8",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "9",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "10",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "11",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "12",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "13",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "14",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
  {
    _id: "15",
    image:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/v1707824121/iMarket/Products/Mac/MacBook%20Pro%2016/silver.png",
    model: "MacBook Pro 16",
    colors: [
      {
        _id: "1",
        hex: "2e2c2e",
      },
      {
        _id: "2",

        hex: "2e2c2e",
      },
      {
        _id: "3",

        hex: "2e2c2e",
      },
      {
        _id: "4",

        hex: "2e2c2e",
      },
    ],
    options: [
      {
        capacity: "512GB",
        price: 699,
      },
      {
        capacity: "1TB",
        price: 699,
      },
      {
        capacity: "2TB",
        price: 699,
      },
    ],
  },
];
