"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function todo(req, res) {
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
const router = express_1.Router();
router.post("/", todo);
exports.default = router;
//# sourceMappingURL=todo.js.map