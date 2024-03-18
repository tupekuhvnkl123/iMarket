import express from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import productsRoutes from "./productsRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);

export default router;
