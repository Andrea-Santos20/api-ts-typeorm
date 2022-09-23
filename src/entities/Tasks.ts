import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: "tasks" })
export class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column({
        default: false,
    })
    finished: boolean;
    
    @CreateDateColumn()
    create_at: Date;
    
    @CreateDateColumn()
    update_at: Date;
}