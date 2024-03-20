import { ProductPageImagesType } from "../components/Pages/ProductPage/ProductPage.types";
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
  const loweredCaseBrand = brand.toLowerCase();
  const isIMac =
    model === "iMac" || model === "iMac-Pro" || model === "Mac-Studio";
  const isAirPodsMax = model === "AirPods-Max";

  if (loweredCaseBrand === appRoutes.iPhone) return iPhoneProductPageImages;
  if (loweredCaseBrand === appRoutes.Mac && isIMac)
    return iMacProductPageImages;
  if (loweredCaseBrand === appRoutes.Mac && !isIMac)
    return macProductPageImages;
  if (loweredCaseBrand === appRoutes.AirPods && isAirPodsMax)
    return airPodsMaxProductPageImages;
  if (loweredCaseBrand === appRoutes.AirPods && !isAirPodsMax)
    return airPodsProductPageImages;

  return { preview: "", background: "", info: [""], bubbles: "" };
};
