import { Router } from "express";
import { Request as Req, Response as Res } from "express";
import InitialSettings from "../entity/InitialSettings";
import { ObjectId } from "mongodb";

async function todoDelete(req: Req, res: Res) {
    let id = new ObjectId(req.params.id);
    const todo = await InitialSettings.findOneById(id);
    if (!todo) { return res.sendStatus(404); }
    InitialSettings.remove(todo);
    res.sendStatus(204);
}

const router = Router();
router.delete("/:id", todoDelete);
export default router;