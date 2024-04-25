import Navbar from "./components/Layouts/Navbar/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Layouts/Footer/Footer";
import "./style/global/global.scss";
import { setAxiosDefaults } from "./utils/setAxiosDefaults";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import SnackBar from "./components/UI/SnackBar";

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
      <SnackBar
        success
        open={loggedInSucceed}
        message="Logged in successfully!"
        hideDuration={3000}
      />
    </>
  );
};

export default App;
