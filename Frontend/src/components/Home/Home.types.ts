export type HomeGalleryItemType = {
  title?: string;
  image: string;
  route?: string;
};

export type HomeGalleryDataType = {
  mappedProducts: HomeGalleryItemType[];
  iPhone15: HomeGalleryItemType;
  airPodsMax: HomeGalleryItemType;
};
