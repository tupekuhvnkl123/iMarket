import express from "express";
import { addToFavorites, getFavorites } from "../controllers/user";
import checkAuth from "../middlewares/checkAuth";

const router = express.Router();

// @ts-expect-error
router.get("/favorites", checkAuth, getFavorites); // @ts-expect-error
router.post("/addToFavorite", checkAuth, addToFavorites);

export default router;
