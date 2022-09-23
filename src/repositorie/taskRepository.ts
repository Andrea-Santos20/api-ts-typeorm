import { AppDataSource } from '../data-source'
import { Tasks } from '../entities/Tasks'

export const TaskRepository = AppDataSource.getRepository(Tasks)