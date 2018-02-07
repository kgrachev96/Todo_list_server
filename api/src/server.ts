import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import api from "./api";
import { initSettings } from "./inits/initialSettings";

const PORT = parseInt(process.env.PORT) || 3000;

createConnection().then(async (connection) => {
    await initSettings();
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api", api);
    app.listen(PORT, () => {
        console.log("Live on " + PORT);
    });
    app.get("/", (req, res) => res.send("Server in LIVE!"));

}).catch((error) => console.log(error));