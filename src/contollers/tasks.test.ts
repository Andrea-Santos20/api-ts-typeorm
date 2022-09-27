import request from "supertest";
import { app } from "../data-source";

describe("TasksController", () => {
  test("Deve criar uma nova Tarefa", async () => {
    const tasks = {
      id: 0,
      title: "",
      description: "",
      finished: false,
      create_at: new Date(),
      update_at: new Date(),
    };
    const res = await request(app).post("/tasks").send(tasks);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(tasks);
  });
});





// import { TasksController } from '../contollers/TasksController'
// import { Tasks } from '../entities/Tasks';

// describe('TasksController', () => {
//     let tasksController: TasksController;

//     const mock = {
//         create:jest.fn(),
//         save: jest.fn(),
//     }

//     it('should new create tasks', async () => {
//         const tasks:Tasks = {
//             id: 0,
//             title: '',
//             description: '',
//             finished: false,
//             create_at: new Date(),
//             update_at: new Date(),
//         }
//         await tasksController.create.mock(tasks)

//     })
// })
