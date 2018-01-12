import { Router } from "express";
import todo from "../api/todo";

const router = Router();

router.use("/", todo);

export default router;