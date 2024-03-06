import React from "react";
import { ProductColorType } from "../ProductPage.types";
import { SetStateType } from "../../../../types/custom.types";
import classes from "../../../../style/Pages/ProductPage/ColorSection/ColorsList.module.scss";

type ColorsListProps = {
  colors: ProductColorType[];
  setSelectedColor: SetStateType<ProductColorType>;
};

const ColorsList: React.FC<ColorsListProps> = ({
  colors,
  setSelectedColor,
}) => {
  return (
    <ul className={classes.colorsList}>
      {colors.map((color, index) => (
        <div className={classes.colorItem} key={color._id}>
          <div
            onClick={() => setSelectedColor(colors[index])}
            style={{ backgroundColor: `#${color.hex}` }}
          />
          <p>{color.name}</p>
        </div>
      ))}
    </ul>
  );
};

export default ColorsList;
