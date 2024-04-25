import express from "express";
import {
  getBrandProducts,
  getProduct,
  searchProducts,
} from "../controllers/products";

const router = express.Router();

router.get("/brand/:brand", getBrandProducts);
router.get("/:model", getProduct);
router.get("/search/:model", searchProducts);

export default router;
