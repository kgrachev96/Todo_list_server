import * as bodyParser from "body-parser";
import * as express from "express";
// import api from "./api";
import "reflect-metadata";
import { createConnection } from "typeorm";

const PORT = parseInt(process.env.PORT) || 3000;

createConnection().then(async (connection) => {
    const app = express();
    app.use("/build", express.static(__dirname + "/build"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.listen(PORT);
    app.use((req, res, next) => {
        res.setHeader("Cache-Control", "no-cache");
        next();
    });
    // const todo = new Todo();
    // todo.title = "Задача 1";
    // todo.completed = true;
    // await connection.manager.save(todo);
    // await connection.manager.find(Todo);
}).catch((error) => console.log(error));

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
