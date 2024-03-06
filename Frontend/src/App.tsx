import Navbar from "./components/Layouts/Navbar/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Layouts/Footer/Footer";
import "./style/global/global.scss";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
