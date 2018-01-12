import { Router } from "express";
import { Request as Req, Response as Res } from "express";

async function todo(req, res: Res) {
    console.log(req.body);
    res.send("Hello");
}

const router = Router();
router.post("/", todo);
export default router;