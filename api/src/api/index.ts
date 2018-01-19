import { Router } from "express";
import initial from "../api/initial";

const router = Router();

router.use("/initial", initial);

export default router;