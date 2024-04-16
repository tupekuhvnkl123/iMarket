import Navbar from "./components/Layouts/Navbar/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Layouts/Footer/Footer";
import "./style/global/global.scss";
import { setAxiosDefaults } from "./utils/setAxiosDefaults";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import LoggedInPopout from "./components/UI/LoggedInPopout";

const App: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useLayoutEffect(() => {
    setAxiosDefaults();
  }, [isLoggedIn]);

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <LoggedInPopout />
    </>
  );
};

export default App;
