import { ProductColorType } from "../ProductPage.types";
import { IoIosArrowBack } from "react-icons/io";
import ColorsList from "./ColorsList";
import { SetStateType } from "../../../../types/custom.types";
import classes from "../../../../style/Pages/ProductPage/ColorSection/ChooseColor.module.scss";

type ChooseColorProps = {
  background: string;
  colors: ProductColorType[];
  selectedColor: ProductColorType;
  setSelectedColor: SetStateType<ProductColorType>;
};

const ChooseColor: React.FC<ChooseColorProps> = ({
  background,
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div
      className={classes.background}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes.overlay}>
        <div className={classes.colorsContainer}>
          <img
            key={selectedColor._id}
            className={classes.image}
            src={selectedColor.image}
            alt={selectedColor.name}
          />
          <ColorsList colors={colors} setSelectedColor={setSelectedColor} />
        </div>
        <div className={classes.createYoursCard}>
          <h1 className={classes.title}>Create yours</h1>
          <p className={classes.text}>
            Personalize your product with our customizable color options. Choose
            yours!
          </p>
          <div className={classes.chooseColor}>
            <IoIosArrowBack className={classes.icon} />
            <p>Choose color</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseColor;
