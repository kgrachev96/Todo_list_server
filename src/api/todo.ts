import { Router } from "express";
import { Request as Req, Response as Res } from "express";

function todo(req, res: Res) {
    const todo = [
        {
            title: "Задача 1",
            completed: true
        },
        {
            title: "Задача 2",
            completed: true
        },
        {
            title: "Задача 3",
            completed: true
        }
    ];
    res.send(todo);
}

const router = Router();
router.post("/", todo);
export default router;