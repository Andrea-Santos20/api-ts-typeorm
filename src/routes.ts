import { Router } from "express";
import { TasksController } from "./contollers/TasksController";

const routes = Router();

routes.post("/tasks", new TasksController().createTask);
routes.get("/tasks/:id", new TasksController().getById);
routes.get("/tasks", new TasksController().list);
routes.put("/tasks/:id", new TasksController().updateTask);
routes.delete("/tasks/:id", new TasksController().deleteTask);

export default routes;
