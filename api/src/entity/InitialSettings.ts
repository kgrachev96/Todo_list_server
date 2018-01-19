import { BaseEntity, ObjectID, Entity, ObjectIdColumn, Column } from "typeorm";
import { IInitialSettings } from "../interfaces";


@Entity()
export default class InitialSettings extends BaseEntity implements IInitialSettings {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    completed: boolean;

}