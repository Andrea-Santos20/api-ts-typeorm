"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const taskRepository_1 = require("../repositorie/taskRepository");
class TasksController {
    async createTask(req, res) {
        const description = req.body;
        if (!description) {
            return res.status(400).json({ message: 'O nome é obrigatório' });
        }
        try {
            const newTask = taskRepository_1.TaskRepository.create(description);
            await taskRepository_1.TaskRepository.save(newTask);
            return res.status(201).json(newTask);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async task(req, res) {
        try {
            const task = await taskRepository_1.TaskRepository.find();
            console.log(task);
            return res.json(task);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async title(req, res) {
        return res.status(500).json({ message: 'Internal Sever Error' });
    }
    async getById(req, res) {
        const task_id = req.params.id;
        console.log(task_id);
        try {
            const task = await taskRepository_1.TaskRepository.findOneBy({ id: Number(task_id) });
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não existe' });
            }
            return res.status(200).send(task);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async updateTask(req, res) {
        try {
            const task = req.body;
            console.log(req.params.id);
            await taskRepository_1.TaskRepository.update(req.params.id, task);
            res.status(200).json({ message: "Tarefa do id " + req.params.id + " foi atualizada." });
        }
        catch (err) {
            res.status(500).send({ error: err });
        }
    }
    ;
    async deleteTask(req, res) {
        try {
            await taskRepository_1.TaskRepository.delete(req.params.id);
            res.status(200).json({ message: "Tarefa do id " + req.params.id + " deletada." });
        }
        catch (err) {
            res.status(500).send({ error: err });
        }
    }
    ;
}
exports.TasksController = TasksController;
//# sourceMappingURL=TasksController.js.map