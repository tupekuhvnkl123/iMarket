import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MacRoutes from "./MacRoutes";
import IPhoneRoutes from "./IPhoneRoutes";
import AirPodsRoutes from "./AirPodsRoutes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/mac/*" element={<MacRoutes />} />
      <Route path="/iphone/*" element={<IPhoneRoutes />} />
      <Route path="/airpods/*" element={<AirPodsRoutes />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
