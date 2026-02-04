import { Router } from "express";
import { createUser, getUsers, updateUser, partialUpdate, deleteUser } from "../controllers/user.controller.js";

const router = Router();
router.get("/", getUsers); 
router.post("/", createUser);
router.put("/:id", updateUser);
router.patch("/:id", partialUpdate);
router.delete("/:id", deleteUser);

export default router;