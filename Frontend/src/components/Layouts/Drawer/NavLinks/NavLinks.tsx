import { Link } from "react-router-dom";
import { appRoutes } from "../../../../utils/consts";
import { DrawerContentProps } from "../drawer.config";
import classes from "../../../../style/Layouts/Drawer/NavLinks/NavLinks.module.scss";

const NavLinks: React.FC<DrawerContentProps> = ({ closeDrawer }) => {
  return (
    <ul className={classes.navLinksList}>
      {Object.keys(appRoutes).map((key) => (
        <li onClick={closeDrawer} className={classes.navLink} key={key}>
          <Link to={key.toLowerCase()}>{key}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
