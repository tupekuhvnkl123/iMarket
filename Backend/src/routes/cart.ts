import express from "express";
import checkAuth from "../middlewares/checkAuth";
import {
  addToCart,
  checkout,
  getCart,
  getOrders,
  removeFromCart,
} from "../controllers/cart";

const router = express.Router();

router.get("/", checkAuth, getCart);
router.get("/orders", checkAuth, getOrders);
router.post("/", checkAuth, addToCart);
router.delete("/", checkAuth, removeFromCart);
router.post("/checkout", checkAuth, checkout);

export default router;
