import { Routes, Route } from "react-router-dom";
import MacPage from "../pages/MacPage";
import ProductPage from "../pages/ProductPage";

const MacRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MacPage />} />
      <Route path=":model" element={<ProductPage />} />
    </Routes>
  );
};

export default MacRoutes;
