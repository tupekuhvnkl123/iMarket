import ChooseOption from "./OptionsSection/ChooseOption";
import ChooseColor from "./ColorSection/ChooseColor";
import Information from "./InformationSection/Information";
import PreviewCard from "./PreviewCard";
import {
  ProductColorType,
  ProductOptionType,
  ProductType,
  ProductPageImagesType,
} from "./ProductPage.types";
import { useState } from "react";
import classes from "../../../style/Pages/ProductPage/ProductTemplate.module.scss";

type ProductTemplateProps = {
  productData: ProductType;
  staticImages: ProductPageImagesType;
  productRoute: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  productData,
  staticImages,
  productRoute,
}) => {
  const { _id, brand, model, colors, information, options } = productData;
  const { background, info, preview, bottom, bubbles } = staticImages;
  const isIMac =
    productRoute === "iMac" ||
    productRoute === "iMac Pro" ||
    productRoute === "Mac Studio";

  const [selectedColor, setSelectedColor] = useState<ProductColorType>(
    colors[0]
  );
  const [selectedOption, setSelectedOption] = useState<ProductOptionType>(
    options[0]
  );

  return (
    <main className={classes.main}>
      <PreviewCard
        previewImage={preview}
        title={model}
        bubbles={bubbles}
        isIMac={isIMac}
      />
      <ChooseColor
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colors}
        background={background}
      />
      <ChooseOption
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className={classes.buyButtonContainer}>
        <button type="button">Buy now</button>
      </div>
      <Information
        information={information}
        bottom={bottom}
        infoImages={info}
        brand={brand}
      />
    </main>
  );
};

export default ProductTemplate;
