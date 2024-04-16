import express from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import productsRoutes from "./products";
import cartRoutes from "./cart";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/cart", cartRoutes);

export default router;
