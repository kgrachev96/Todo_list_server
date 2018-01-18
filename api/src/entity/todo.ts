import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EntityRepository, Repository } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    completed: boolean;

}

@EntityRepository()
export class TodoRepository extends Repository<Todo> {

    getTodos(title: string, completed: boolean) {
        return this.createQueryBuilder("todo")
            .where("todo.title = :title", { title })
            .andWhere("user.completed = :completed", { completed })
            .getMany();
    }

}