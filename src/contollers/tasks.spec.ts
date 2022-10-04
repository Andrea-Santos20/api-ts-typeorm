import app from "../index";
import request from "supertest";
import { TaskRepository } from "../repositories/taskRepository";

describe("TasksController", () => {
  TaskRepository.find = jest.fn().mockReturnValue({
    id: 123,
    title: "Tarefa",
    description: "minha tarefa",
    finished: false,
    create_at: new Date(),
    update_at: new Date(),
  });

  TaskRepository.create = jest.fn().mockReturnValue({
    title: "Teste",
    description: "Tarefa",
  });

  TaskRepository.save = jest.fn().mockReturnValue({
    title: "Teste",
    description: "atualizando para realizar teste.",
    id: 27,
    finished: false,
    create_at: new Date(),
    update_at: new Date(),
  });
  it("Should return to tasks create", async () => {
    const tasks = { 
      title: "Teste", 
      description: "Tarefa" }

    const res = await request(app).post("/tasks").send({
      title: "Teste",
      description: "Tarefa",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(tasks)
  });

  TaskRepository.find = jest.fn().mockReturnValue({
    title: "Teste",
    description: "atualizando para realizar teste.",
    id: 27,
    finished: false,
    create_at: new Date(),
    update_at: new Date(),
  });
  it("Should return tasks list", async () => {
    const response = await request(app)
      .get("/tasks")
      .send({ body: { id: 123 } });
    expect(response.statusCode).toEqual(200);
  });

  TaskRepository.findOneBy = jest.fn().mockReturnValue({
    title: "Teste",
    description: "atualizando para realizar teste.",
    id: 27,
    finished: false,
    create_at: new Date(),
    update_at: new Date(),
  });
  it("Should return tasks by Id", async () => {
    const response = await request(app)
      .get("/tasks/12")
      .send({        
    });
    expect(response.statusCode).toEqual(200);
  });
});


it("Should return update tasks by Id", async () => {
  TaskRepository.update = jest.fn().mockReturnValue({
    title: "Teste",
    description: "atualizando para realizar teste.",
    id: 27,
    finished: false,
    create_at: new Date(),
    update_at: new Date(),
  });
  const response = await request(app)
    .put("/tasks/123")
    .send({
      body: {
        title: "minha primeira tarefa",
        description: "minha primeira tarefa",
      },
    });
  expect(response.statusCode).toEqual(200);
});
