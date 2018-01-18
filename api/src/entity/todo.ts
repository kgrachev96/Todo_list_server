import { BaseEntity, ObjectID, Entity, PrimaryGeneratedColumn, Column, getConnection } from "typeorm";

@Entity()
export default class Todo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    completed: boolean;

    /*===================*/

}
