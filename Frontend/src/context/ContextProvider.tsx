import { ReactNode } from "react";
import { GlobalContextProvider } from "./GlobalContext";

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default ContextProvider;
