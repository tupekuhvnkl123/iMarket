import { ReactNode, createContext } from "react";
import { AuthContextType } from "./AuthContext.types";
import useAuthContext from "../hooks/useAuthContext";

type AuthContextProviderProps = {
  children: ReactNode;
};

const initialValue = {
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  loggedInSucceed: false,
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const authContextValue = useAuthContext();

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
