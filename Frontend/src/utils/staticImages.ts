import { ProductPageImagesType } from "../types/Pages/ProductPage/productImages.types";
import {
  iPhoneProductPageImages,
  macProductPageImages,
  iMacProductPageImages,
  airPodsProductPageImages,
  airPodsMaxProductPageImages,
  appRoutes,
} from "./consts";

export const matchStaticImages = (
  brand: string,
  model: string | undefined
): ProductPageImagesType => {
  const isIMac =
    model === "iMac" || model === "iMac Pro" || model === "Mac Studio";
  const isAirPodsMax = model === "AirPods Max";

  if (brand === appRoutes.iPhone) return iPhoneProductPageImages;
  if (brand === appRoutes.Mac && isIMac) return iMacProductPageImages;
  if (brand === appRoutes.Mac && !isIMac) return macProductPageImages;
  if (brand === appRoutes.AirPods && isAirPodsMax)
    return airPodsMaxProductPageImages;
  if (brand === appRoutes.AirPods && !isAirPodsMax)
    return airPodsProductPageImages;

  return { preview: "", background: "", info: [""] };
};
