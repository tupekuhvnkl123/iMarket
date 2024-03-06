import { useState } from "react";
import { AuthFormValues } from "./Account";
import AuthForm from "./AuthForm";
import classes from "../../../../style/Layouts/Drawer/Account/Auth.module.scss";

type AuthProps = {
  onSubmit: (data: AuthFormValues, isLogin: boolean) => void;
};

const Auth: React.FC<AuthProps> = ({ onSubmit }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className={classes.container}>
      <div className={classes.selectAuth}>
        <p
          onClick={() => setIsLogin(true)}
          className={isLogin ? classes.active : ""}
        >
          Login
        </p>
        <hr />
        <p
          className={!isLogin ? classes.active : ""}
          onClick={() => setIsLogin(false)}
        >
          Create Account
        </p>
      </div>
      <AuthForm onSubmit={onSubmit} isLogin={isLogin} />
      {isLogin && (
        <div className={classes.demoAccount}>
          <p>
            <b>Demo Account :</b> demo@gmail.com | demo12345
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
