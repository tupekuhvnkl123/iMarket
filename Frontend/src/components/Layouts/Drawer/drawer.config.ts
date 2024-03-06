import { DrawerValues } from "./Drawer.types";
import Account from "./Account/Account";
import DummyEilon from "./DummyEilon";
import NavLinks from "./NavLinks/NavLinks";
import Search from "./Search/Search";

export type DrawerContentProps = {
  closeDrawer?: () => void;
};

export const DrawerConfig = {
  [DrawerValues.account]: Account,
  [DrawerValues.cart]: DummyEilon,
  [DrawerValues.favorites]: DummyEilon,
  [DrawerValues.search]: Search,
  [DrawerValues.navLinks]: NavLinks,
};
