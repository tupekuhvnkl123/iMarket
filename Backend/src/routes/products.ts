import express from "express";
import { getBrandProducts, getProduct } from "../controllers/products";

const router = express.Router();

router.get("/brand/:brand", getBrandProducts);
router.get("/:model", getProduct);

export default router;
