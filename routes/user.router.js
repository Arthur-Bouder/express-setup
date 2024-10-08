import express from "express";
import {
	registerUser,
	loginUser,
	getUser,
	updateUser,
	deleteUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { createUserSchema } from "../validation/user.validationSchema.js";

const router = express.Router();

router.post(
	"/register",
	validateSchemaMiddleware(createUserSchema),
	registerUser
);
router.post("/login", loginUser);

router.use(authMiddleware);

router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
