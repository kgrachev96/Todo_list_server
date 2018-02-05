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
const mongodb_1 = require("mongodb");
function todoDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = new mongodb_1.ObjectId(req.params.id);
        const todo = yield InitialSettings_1.default.findOneById(id);
        if (!todo) {
            return res.sendStatus(404);
        }
        InitialSettings_1.default.remove(todo);
        res.sendStatus(204);
    });
}
const router = express_1.Router();
router.delete("/:id", todoDelete);
exports.default = router;
//# sourceMappingURL=todoDelete.js.map