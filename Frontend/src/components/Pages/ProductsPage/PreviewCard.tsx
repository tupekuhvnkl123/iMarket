import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import classes from "../../../style/Pages/ProductsPage/PreviewCard.module.scss";

type PreviewCardProps = {
  previewImage: string;
  title: string;
  iPhonePage?: boolean;
  arrowClickHandler: () => void;
};

const PreviewCard: React.FC<PreviewCardProps> = ({
  previewImage,
  title,
  iPhonePage,
  arrowClickHandler,
}) => {
  return (
    <div
      className={`${classes.card} ${iPhonePage ? classes.iPhoneContainer : ""}`}
    >
      <div
        className={`${classes.imageContainer} ${
          iPhonePage ? classes.iPhoneImage : ""
        }`}
      >
        <img src={previewImage} alt={title} />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.titleContainer}>
          <FaApple className={classes.appleIcon} />
          <h1>{title}</h1>
        </div>
        <MdOutlineKeyboardArrowDown
          onClick={arrowClickHandler}
          className={classes.arrow}
        />
      </div>
    </div>
  );
};

export default PreviewCard;
