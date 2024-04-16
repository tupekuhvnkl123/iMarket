import express from "express";
import { addToFavorites, getFavorites } from "../controllers/user";
import checkAuth from "../middlewares/checkAuth";

const router = express.Router();

router.get("/favorites", checkAuth, getFavorites);
router.post("/addToFavorite", checkAuth, addToFavorites);

export default router;
