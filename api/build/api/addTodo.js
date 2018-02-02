"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InitialSettings_1 = require("../entity/InitialSettings");
function addTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { title } = req.body;
        let todo = new InitialSettings_1.default();
        todo.title = title;
        todo.completed = false;
        yield todo.save();
        res.json(todo);
    });
}
const router = express_1.Router();
router.post("/", addTodo);
exports.default = router;
//# sourceMappingURL=addTodo.js.map