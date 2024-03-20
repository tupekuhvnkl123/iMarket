import Skeleton from "react-loading-skeleton";
import classes from "../../../style/Pages/ProductPage/ProductLoadingSkeleton.module.scss";

const ProductLoadingSkeleton: React.FC = () => {
  return (
    <div className={classes.container}>
      <Skeleton className={classes.previewSkeleton} />
      <Skeleton className={classes.colorsSkeleton} />
      <div className={classes.optionsSkeleton}>
        <Skeleton className={classes.option} />
        <Skeleton className={classes.option} />
        <Skeleton className={classes.option} />
      </div>
    </div>
  );
};

export default ProductLoadingSkeleton;
