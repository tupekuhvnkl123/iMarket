import { Routes, Route } from "react-router-dom";
import IPhonePage from "../pages/IPhonePage";
import ProductPage from "../pages/ProductPage";

const IPhoneRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IPhonePage />} />
      <Route path=":model" element={<ProductPage />} />
    </Routes>
  );
};

export default IPhoneRoutes;
