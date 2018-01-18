"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../entity/todo");
function todo(req, res) {
    const todo = todo_1.default.getTodos();
    res.json(todo);
}
const router = express_1.Router();
router.get("/", todo);
exports.default = router;
//# sourceMappingURL=getTodos.js.map