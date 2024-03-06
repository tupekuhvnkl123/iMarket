import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animationsVariants";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../style/Home/Preview.module.scss";
import { DrawerValues } from "../Layouts/Drawer/Drawer.types";

type PreviewProps = {
  onClickExplore: () => void;
};

const Preview: React.FC<PreviewProps> = ({ onClickExplore }) => {
  const { setDrawerContent } = useContext(GlobalContext);

  return (
    <section className={classes.container}>
      <motion.div {...fadeInAnimation} className={classes.content}>
        <h1 className={classes.title}>iMarket</h1>
        <p className={classes.text}>
          Your premier Apple destination.
          <br />
          Explore iPhones, AirPods, MacBooks, and more.
          <br />
          Elevate your tech game with quality devices and expert service.
          <br />
          and unmatched satisfaction guaranteed.
        </p>
        <div className={classes.buttonContainer}>
          <button
            className={classes.signInBtn}
            onClick={() => setDrawerContent(DrawerValues.account)}
          >
            Sign In
          </button>
          <button onClick={onClickExplore} className={classes.exploreBtn}>
            Explore
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Preview;
