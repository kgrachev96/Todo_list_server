"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const initial_1 = require("../api/initial");
const addTodo_1 = require("../api/addTodo");
const router = express_1.Router();
router.use("/initial", initial_1.default);
router.use("/addTodo", addTodo_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map