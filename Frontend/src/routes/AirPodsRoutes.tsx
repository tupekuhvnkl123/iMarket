import { Routes, Route } from "react-router-dom";
import AirPodsPage from "../pages/AirPodsPage";
import ProductPage from "../pages/ProductPage";

const AirPodsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AirPodsPage />} />
      <Route path=":model" element={<ProductPage />} />
    </Routes>
  );
};

export default AirPodsRoutes;
