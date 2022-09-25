import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: "tasks" })
export class Tasks {
    // static save(newRoom: void) {
    //     throw new Error('Method not implemented.');
    // }
    // static create(arg0: { name: any; description: any; }) {
    //     throw new Error('Method not implemented.');
    // }

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