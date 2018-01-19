import { Router } from "express";
import { Request as Req, Response as Res } from "express";
import InitialSettings from "../entity/InitialSettings";

async function initial(req, res: Res) {
    const initialSettings = await InitialSettings.findOne();
    res.json({ ...initialSettings });
}

const router = Router();
router.get("/", initial);
export default router;