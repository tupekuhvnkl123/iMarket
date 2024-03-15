//// Packages
import { useState, useEffect } from "react";
// import Cookies from "js-cookie";

const useAuthContext = () => {
  //   const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [user, setUser] = useState(null);

  //   const login = useCallback((data, endingPath) => {
  //     setIsLoggedIn(!!data.accessToken);
  //     setUser(data.userData);
  //     const storedUser = {
  //       ...data.userData,
  //       token: data.token,
  //     };
  //     // const twoHourFromNow = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
  //     Cookies.set("user", JSON.stringify(storedUser), {
  //       expires: 2 / 28,
  //     });
  //   }, []);

  //   const logout = useCallback((endingPath) => {
  //     setIsLoggedIn(false);
  //     setUser(null);
  //     Cookies.remove("user");
  //     router.reload();
  //   }, []);

  useEffect(() => {
    // const storedUser = Cookies.get("user");
    // if (!storedUser.token) {
    //   logout();
    // }
  }, []);

  return { isLoggedIn };
};

export default useAuthContext;
