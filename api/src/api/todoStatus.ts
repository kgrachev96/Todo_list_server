import { Router } from "express";
import { Request as Req, Response as Res } from "express";
import InitialSettings from "../entity/InitialSettings";
import { ObjectId } from "mongodb";

async function todoStatusChange(req: Req, res: Res) {
    let id = new ObjectId(req.params.id);
    const todo = await InitialSettings.findOneById(id);
    if (!todo) { return res.sendStatus(404); }
    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
}

const router = Router();
router.patch("/:id", todoStatusChange);
export default router;