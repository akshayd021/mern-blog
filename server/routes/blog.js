import express from "express";

import AuthController from "../controller/authContloer.js";

const router = express.Router();
router.post("/user/register", AuthController.userRegistation);
router.post("/user/login", AuthController.userLogin);

export default router;
