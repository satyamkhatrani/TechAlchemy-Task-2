import express from "express";
import { login, register } from "./authController.js";

const apiRoute = express.Router();

apiRoute.get("/login", login);
apiRoute.post("/signup", register);

export default apiRoute;
