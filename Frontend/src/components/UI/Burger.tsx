import classes from "../../style/UI/Burger.module.scss";

type BurgerProps = {
  open: boolean;
  className?: string;
};

const Burger: React.FC<BurgerProps> = ({ open, className }) => {
  return (
    <div
      className={`${classes.burger} ${open ? classes.open : ""} ${className}`}
    >
      <div className={`${classes.line} ${classes.line1}`}></div>
      <div className={`${classes.line} ${classes.line2}`}></div>
    </div>
  );
};

export default Burger;
