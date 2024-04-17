import Navbar from "./components/Layouts/Navbar/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Layouts/Footer/Footer";
import "./style/global/global.scss";
import { setAxiosDefaults } from "./utils/setAxiosDefaults";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import SuccessPopout from "./components/UI/SuccessPopout";

const App: React.FC = () => {
  const { isLoggedIn, loggedInSucceed } = useContext(AuthContext);

  useLayoutEffect(() => {
    setAxiosDefaults();
  }, [isLoggedIn]);

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <SuccessPopout open={loggedInSucceed} text="Logged in successfully!" />
    </>
  );
};

export default App;
