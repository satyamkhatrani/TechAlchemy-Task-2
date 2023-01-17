import express from "express";
import { verifyLoginUser } from "../middleware/auth.js";
import { getNews, getWeather } from "./appController.js";
import { login, register } from "./authController.js";

const apiRoute = express.Router();

apiRoute.get("/login", login);
apiRoute.post("/signup", register);

apiRoute.get("/news", verifyLoginUser, getNews);
apiRoute.get("/weather", getWeather);

export default apiRoute;
