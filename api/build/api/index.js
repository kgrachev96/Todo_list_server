"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../api/todo");
const router = express_1.Router();
router.use("/todo", todo_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map