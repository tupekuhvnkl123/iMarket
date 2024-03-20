import express from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import productsRoutes from "./products";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);

export default router;
