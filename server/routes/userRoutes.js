import express from "express";
import { login, signUp, allUsers } from "../controllers/userController.js";
// import { test } from "../controllers/testCont.js";

const router = express.Router();

router.get("/", allUsers)
router.post("/login", login);
router.post("/signup", signUp);
// router.get("/", (req, res) => {
//     res.send("hello routes")
// })

// router.get("/abc", test)

export default router;