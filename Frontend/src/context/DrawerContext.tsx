import { ReactNode, createContext } from "react";
import useDrawerContext from "../hooks/useDrawerContext";
import { DrawerContextType } from "./DrawerContext.types";

type DrawerContextProviderProps = {
  children: ReactNode;
};

const initialValue = {
  drawerContent: null,
  setDrawerContent: () => {},
  drawerIsOpen: false,
  closeDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextType>(initialValue);

export const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({
  children,
}) => {
  const drawerContextValue = useDrawerContext();
  return (
    <DrawerContext.Provider value={drawerContextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
