"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TasksController_1 = require("./contollers/TasksController");
const routes = (0, express_1.Router)();
routes.post('/tasks', new TasksController_1.TasksController().createTask);
routes.get('/tasks/:id', new TasksController_1.TasksController().getById);
routes.put('/tasks/:id', new TasksController_1.TasksController().updateTask);
routes.delete('/tasks/:id', new TasksController_1.TasksController().deleteTask);
exports.default = routes;
//# sourceMappingURL=routes.js.map