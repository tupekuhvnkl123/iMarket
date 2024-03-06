import React from "react";
import { ProductOptionType } from "../ProductPage.types";
import { SetStateType } from "../../../../types/custom.types";
import classes from "../../../../style/Pages/ProductPage/OptionsSection/OptionsList.module.scss";

type OptionsListProps = {
  options: ProductOptionType[];
  selectedOption: ProductOptionType;
  setSelectedOption: SetStateType<ProductOptionType>;
};

const OptionsList: React.FC<OptionsListProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const isLastItem = (index: number): boolean => options.length - 1 === index;
  const priceText = (price: number): string =>
    `${price}$ or ${parseFloat((price / 12).toFixed(2))}/mo. for 12 mo.`;
  const selectedClass = (option: ProductOptionType): string =>
    selectedOption === option ? classes.selected : "";

  return (
    <ul className={classes.capacityList}>
      {options.map((option, index) => (
        <React.Fragment key={option.price}>
          <div
            onClick={() => setSelectedOption(options[index])}
            className={`${classes.capacityItem} ${selectedClass(option)}`}
          >
            {option.capacity && <p>{option.capacity}</p>}
            <p>{priceText(option.price)}</p>
          </div>
          {!isLastItem(index) && <hr className={classes.capacityBreakLine} />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default OptionsList;
