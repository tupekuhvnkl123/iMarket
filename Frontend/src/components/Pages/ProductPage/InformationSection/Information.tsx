import {
  ProductInformationType,
  ProductBrandsType,
} from "../ProductPage.types";
import Dimensions from "./Dimensions";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../../utils/animationsVariants";
import classes from "../../../../style/Pages/ProductPage/InformationSection/Information.module.scss";

type InformationProps = {
  information: ProductInformationType;
  bottom?: string;
  infoImages: string[];
  brand: ProductBrandsType;
};

const Information: React.FC<InformationProps> = ({
  information,
  infoImages,
  bottom,
  brand,
}) => {
  const isFourImage = infoImages.length === 4;

  return (
    <div className={classes.container}>
      <hr className={classes.seperateLine} />
      <div className={classes.titleContainer}>
        <h1>Additional Information</h1>
      </div>
      <div className={classes.contentContainer}>
        <motion.div
          {...slideAnimation("right")}
          className={classes.imagesContainer}
        >
          {infoImages.slice(0, isFourImage ? 2 : 1).map((image) => (
            <img key={image} src={image} alt={brand} />
          ))}
        </motion.div>
        <Dimensions data={information} />
        <motion.div
          {...slideAnimation("left")}
          className={classes.imagesContainer}
        >
          {infoImages.slice(isFourImage ? 2 : 1).map((image) => (
            <img key={image} src={image} alt={brand} />
          ))}
        </motion.div>
      </div>
      {bottom && (
        <div className={classes.bottomImageContainer}>
          <img src={bottom} alt={brand} />
        </div>
      )}
    </div>
  );
};

export default Information;
