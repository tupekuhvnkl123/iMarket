import { useContext } from "react";
import Auth from "./Auth";
import { AuthContext } from "../../../../context/AuthContext";
import UserMenu from "./UserMenu";

export type AuthFormValues = {
  email: string;
  password: string;
};

const Account: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  const authSubmitHandler = (data: AuthFormValues, isLogin: boolean) => {
    console.log(data);

    if (isLogin) {
      //login req
    } else {
      //sign up req
    }
  };

  return (
    <>{!isLoggedIn ? <UserMenu /> : <Auth onSubmit={authSubmitHandler} />}</>
  );
};

export default Account;
