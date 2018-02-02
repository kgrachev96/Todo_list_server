import { Router } from "express";
import { Request as Req, Response as Res } from "express";
import InitialSettings from "../entity/InitialSettings";

async function addTodo(req: Req, res: Res) {
    let { title } = req.body;
    let todo = new InitialSettings();
    todo.title = title;
    todo.completed = false;
    await todo.save();

    res.json(todo);
}

const router = Router();
router.post("/", addTodo);
export default router;