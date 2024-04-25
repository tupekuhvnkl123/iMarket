//// Packages
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
const useAuthContext = () => {
    const navigate = useNavigate();
    const [loggedInSucceed, setLoggedInSucceed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const login = useCallback((user) => {
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
