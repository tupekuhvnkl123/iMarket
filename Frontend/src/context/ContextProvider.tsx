import { ReactNode } from "react";
import { DrawerContextProvider } from "./DrawerContext";
import { AuthContextProvider } from "./AuthContext";

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <AuthContextProvider>
      <DrawerContextProvider>{children}</DrawerContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
