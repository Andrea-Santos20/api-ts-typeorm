import { Request, Response } from 'express';
import { TaskRepository } from '../repositorie/taskRepository';


export class TasksController {
    async createTask(req: Request, res: Response) {
        const description  = req.body
         console.log(req.body)
       
        if (!description) {
            return res.status(400).json({ message: 'O título é obrigatório' })
        }

        try {
            const newTask = TaskRepository.create( description )

            await TaskRepository.save(newTask)

            return res.status(201).json(newTask)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async list(req: Request, res: Response) {
        try {
            const task = await TaskRepository.find()
            // console.log(task)
            return res.json(task)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async test(req: Request, res: Response) {
        // console.log("index")
        return res.status(500).json({ message: 'Internal Sever Error' })

    }

    async getById(req: Request, res: Response) {
        const task_id  = req.params.id;
console.log(task_id);

        try {
            const task = await TaskRepository.findOneBy({ id: Number(task_id) })

            if (!task) {
                return res.status(404).json({ message: 'Tarefa não existe' })
            }
            return res.status(200).send(task)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const task = req.body;
            console.log(req.params.id)
            await TaskRepository.update( req.params.id, task);
            res.status(200).json({ message: "Tarefa do id " + req.params.id + " foi atualizada." });

        } catch (err) {
            res.status(500).send({ error:  err });
        }
    };

    async deleteTask(req: Request, res: Response) {
        try {
                        
            await TaskRepository.delete( req.params.id);
            res.status(200).json({ message: "Tarefa do id " + req.params.id + " deletada." });

        } catch (err) {
            res.status(500).send({ error:  err });
        }
    };
}