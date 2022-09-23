"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const data_source_1 = require("../data-source");
const Tasks_1 = require("../entities/Tasks");
exports.TaskRepository = data_source_1.AppDataSource.getRepository(Tasks_1.Tasks);
//# sourceMappingURL=taskRepository.js.map