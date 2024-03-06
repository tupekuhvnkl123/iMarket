import { appRoutes } from "../../../utils/consts";
import { Link } from "react-router-dom";
import classes from "../../../style/Layouts/Footer/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.navLinksList}>
        {Object.keys(appRoutes).map((key) => (
          <li className={classes.navLink} key={key}>
            <Link to={key.toLowerCase()}>{key}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
