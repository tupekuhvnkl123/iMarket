import React from "react";
import classes from "../../style/UI/CheckMarkLoader.module.scss";

type CheckMarkLoaderProps = {
  checked: boolean;
};

const CheckMarkLoader: React.FC<CheckMarkLoaderProps> = ({ checked }) => (
  <div className={`${classes.loader} ${checked ? classes.checked : ""}`}>
    <div className={classes.checkMark} />
  </div>
);

export default CheckMarkLoader;
