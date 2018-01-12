import { Router } from "express";
import todo from "../api/todo";

const router = Router();

router.use("/todo", todo);

export default router;