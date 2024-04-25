//// Packages
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { UserContextType } from "../context/AuthContext.types";

const useAuthContext = () => {
  const navigate = useNavigate();
  const [loggedInSucceed, setLoggedInSucceed] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserContextType | null>(null);

  const login = useCallback((user: UserContextType) => {
    const userString = JSON.stringify(user);
    Cookies.set("user", userString, { expires: 3 });
    setIsLoggedIn(!!user.token);
    setUser(user);
    setLoggedInSucceed(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove("user");
    navigate(0);
  }, [navigate]);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if ((!storedUser && user) || (!storedUser && isLoggedIn)) {
      logout();
    }
    if (storedUser && !user) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, user, logout]);

  return { isLoggedIn, login, logout, user, loggedInSucceed };
};

export default useAuthContext;
