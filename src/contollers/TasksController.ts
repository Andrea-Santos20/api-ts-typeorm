import { Request, Response } from "express";
import { TaskRepository } from "../repositories/taskRepository";
import { TaskCreate } from "../interfaces/TasksTypes";

export class TasksController {
  async createTask(req: TaskCreate, res: Response) {
    const { title, description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "O título é obrigatório" });
    }

    // if (!req.body.description) {
    //     return res.status(400).json({ message: 'O título é obrigatório' })
    // }

    try {
      const newTask = TaskRepository.create({ title, description });

      // const newTask = TaskRepository.create( req.body )

      const task = await TaskRepository.save(newTask);

      return res.status(201).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const task = await TaskRepository.find();

      return res.json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }

  async getById(req: Request, res: Response) {
    const task_id = req.params.id;
    
    try {
      const task = await TaskRepository.findOneBy({ id: Number(task_id) });

      if (!task) {
        return res.status(404).json({ message: "Tarefa não existe" });
      }
      return res.status(200).send(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }

  async updateTask(req: Request, res: Response) {
    const task_id = req.params.id;
    const task = TaskRepository.findOneBy({ id: Number(task_id) });

    if (!task) {
        return res.status(404).json({ message: "Tarefa não existe" });
      }
    try {
        
      const task = req.body;
      
     await TaskRepository.update(req.params.id, task);    

      res.status(200).send({
        message: "Tarefa do id " + req.params.id + " foi atualizada.",
      });
    } catch (err) {
      res.status(500).send({ message: "Internal Sever Error" });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      await TaskRepository.delete(req.params.id);
      res
        .status(200)
        .json({ message: "Tarefa do id " + req.params.id + " deletada." });
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}
