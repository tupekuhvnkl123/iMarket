import { ReactNode, createContext } from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import { GlobalContextType } from "./GlobalContext.types";

type GlobalContextProviderProps = {
  children: ReactNode;
};

const initialValue = {
  drawerContent: null,
  setDrawerContent: () => {},
  drawerIsOpen: false,
  closeDrawer: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(initialValue);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const globalContextValue = useGlobalContext();
  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
