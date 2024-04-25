import express from "express";
import checkAuth from "../middlewares/checkAuth";
import {
  addToCart,
  checkout,
  getCart,
  getOrders,
  removeFromCart,
  createOrder,
} from "../controllers/cart";

const router = express.Router();

// @ts-expect-error
router.get("/", checkAuth, getCart); // @ts-expect-error
router.get("/orders", checkAuth, getOrders); // @ts-expect-error
router.post("/create-order", checkAuth, createOrder); // @ts-expect-error
router.post("/", checkAuth, addToCart); // @ts-expect-error
router.post("/delete", checkAuth, removeFromCart); // @ts-expect-error
router.post("/checkout", checkAuth, checkout);

export default router;
