import classes from "../../../style/Pages/ProductPage/PreviewCard.module.scss";

type PreviewCardProps = {
  previewImage: string;
  title: string;
  bubbles?: string;
  isIMac: boolean;
};

const PreviewCard: React.FC<PreviewCardProps> = ({
  previewImage,
  title,
  bubbles,
  isIMac,
}) => (
  <div className={classes.card}>
    <div className={classes.titleContainer}>
      <h1>{title}</h1>
      <img className={classes.bubbles} src={bubbles} alt="bubbles" />
    </div>
    <div className={`${classes.imageContainer} ${isIMac ? classes.isMac : ""}`}>
      <img className={classes.previewImage} src={previewImage} alt={title} />
    </div>
  </div>
);

export default PreviewCard;
