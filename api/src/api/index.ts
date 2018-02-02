import { Router } from "express";
import initial from "../api/initial";
import addTodo from "../api/addTodo";
const router = Router();
router.use("/initial", initial);
router.use("/addTodo", addTodo);
export default router;