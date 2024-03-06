import Auth from "./Auth";

export type AuthFormValues = {
  email: string;
  password: string;
};

const Account: React.FC = () => {
  const authSubmitHandler = (data: AuthFormValues, isLogin: boolean) => {
    console.log(data);

    if (isLogin) {
      //login req
    } else {
      //sign up req
    }
  };

  return (
    <>
      <Auth onSubmit={authSubmitHandler} />
    </>
  );
};

export default Account;
