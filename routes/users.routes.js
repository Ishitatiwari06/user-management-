import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();
router.get("/", getUsers); 
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;