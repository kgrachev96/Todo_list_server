"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const initial_1 = require("../api/initial");
const todoAdd_1 = require("../api/todoAdd");
const todoStatus_1 = require("../api/todoStatus");
const todoDelete_1 = require("../api/todoDelete");
const todoSave_1 = require("./todoSave");
const router = express_1.Router();
router.use("/initial", initial_1.default);
router.use("/todoAdd", todoAdd_1.default);
router.use("/todoStatus", todoStatus_1.default);
router.use("/todoDelete", todoDelete_1.default);
router.use("/todoSave", todoSave_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map