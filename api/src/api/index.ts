import { Router } from "express";
import getTodos from "../api/getTodos";

const router = Router();

router.use("/todo", getTodos);

export default router;