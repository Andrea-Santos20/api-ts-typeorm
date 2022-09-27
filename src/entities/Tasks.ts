import { Entity, Column } from "typeorm";
import  { BaseEntity } from './BaseEntity';
@Entity({ name: "tasks" })
export class Tasks extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: false,
  })
  finished: boolean;
}
