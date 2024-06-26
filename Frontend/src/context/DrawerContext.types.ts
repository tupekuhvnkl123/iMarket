import { DrawerValues } from "../components/Layouts/Drawer/Drawer.types";
import { SetStateType } from "../types/custom.types";

export type DrawerContextType = {
  drawerContent: DrawerValues | null;
  setDrawerContent: SetStateType<DrawerValues | null>;
  drawerIsOpen: boolean;
  closeDrawer: () => void;
};
