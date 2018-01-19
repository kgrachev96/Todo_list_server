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
const bodyParser = require("body-parser");
const express = require("express");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const api_1 = require("./api");
const initialSettings_1 = require("./inits/initialSettings");
//100.10.107.232
const PORT = parseInt(process.env.PORT) || 3000;
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    yield initialSettings_1.initSettings();
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use("/api", api_1.default);
    app.listen(PORT, () => {
        console.log("Live on " + PORT);
    });
    app.get("/", (req, res) => res.send("Server in LIVE!"));
})).catch((error) => console.log(error));
// const nextId = 4;
// app.get("/api/todos", (req, res) => {
//     res.send(todos);
// });
// app.post("/api/todos", (req, res) => {
//     const todo = {
//         id: nextId++,
//         title: req.body.title,
//         completed: false,
//     };
//     todos.push(todo);
//     res.send(todo);
// });
// app.put("/api/todos/:id", (req, res) => {
//     const todo = todos.find((todo) => todo.id === req.params.id);
//     if (!todo) { return res.sendStatus(404); }
//     todo.title = req.body.title || todo.title;
//     res.json(todo);
// });
// app.patch("/api/todos/:id", (req, res) => {
//     const todo = todos.find((todo) => todo.id === req.params.id);
//     if (!todo) { return res.sendStatus(404); }
//     todo.completed = !todo.completed;
//     res.json(todo);
// });
// app.delete("/api/todos/:id", (req, res) => {
//     const index = todos.findIndex((todo) => todo.id === req.params.id);
//     if (index === -1) { return res.sendStatus(404); }
//     todos.splice(index, 1);
//     res.sendStatus(204);
// });
//# sourceMappingURL=server.js.map