import { ProductOptionType } from "../ProductPage.types";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import OptionsList from "./OptionsList";
import { SetStateType } from "../../../../types/custom.types";
import classes from "../../../../style/Pages/ProductPage/OptionsSection/ChooseOption.module.scss";

type ChooseOptionProps = {
  options: ProductOptionType[];
  selectedOption: ProductOptionType;
  setSelectedOption: SetStateType<ProductOptionType>;
};

const ChooseOption: React.FC<ChooseOptionProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.chooseOption}>
        <h1>Choose Option</h1>
        <IoIosArrowForward className={classes.icon} />
      </div>
      <OptionsList
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default ChooseOption;
