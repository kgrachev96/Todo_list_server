import { ObjectID } from "typeorm";

export interface IInitialSettings {
    id: ObjectID;
    title: string;
    completed: boolean;
}