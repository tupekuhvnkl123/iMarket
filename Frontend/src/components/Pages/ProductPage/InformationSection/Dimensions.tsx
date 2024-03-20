import React from "react";
import { ProductInformationType } from "../ProductPage.types";
import {
  firstLetterCapitalized,
  sliceStringToArr,
} from "../../../../utils/functions";
import { motion } from "framer-motion";
import { delayedFadeInAnimation } from "../../../../utils/animationsVariants";
import classes from "../../../../style/Pages/ProductPage/InformationSection/Dimensions.module.scss";

type DimensionsProps = {
  data: ProductInformationType;
};

const Dimensions: React.FC<DimensionsProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      {Object.entries(data).map(([key, value], index) => {
        if (key === "_id") return;
        const [firstPart, secondPart] = sliceStringToArr(value, 2);
        return (
          <motion.div
            key={key}
            className={classes.dimensionItem}
            {...delayedFadeInAnimation(index / 5)}
          >
            <p>{firstLetterCapitalized(key)}:</p>
            <p>{firstPart}</p>
            <p>{secondPart}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Dimensions;
