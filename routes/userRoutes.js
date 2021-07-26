import express from "express";
import { login, signUp, allUsers } from "../controllers/userController.js";


const router = express.Router();

router.get("/", allUsers)
router.post("/login", login);
router.post("/signup", signUp);


export default router;