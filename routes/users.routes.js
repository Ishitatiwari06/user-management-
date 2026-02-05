import { Router } from "express";
import { createUser, getUsers, updateUser, partialUpdate, deleteUser } from "../controllers/user.controller.js";
import { checkAuth, validate, validatePatch, validatePut } from "../middleware/auth.js";
import { validateCreateUserDTO } from "../dtos/user.dto.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.zod.js";

const router = Router();
router.get("/", checkAuth, getUsers); 
router.post("/", validate((createUserSchema)), createUser);
router.put("/:id", validatePut, updateUser);
router.patch("/:id", validate(updateUserSchema), partialUpdate);
router.delete("/:id", deleteUser);

export default router;