"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getTodos_1 = require("../api/getTodos");
const router = express_1.Router();
router.use("/todo", getTodos_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map