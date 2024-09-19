import request from 'supertest';
import app from './app.js';

describe("Task Management API", () => {
  describe("GET /tasks", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/tasks");
      expect(response.statusCode).toBe(200);
    });

    test("response should be an array", async () => {
      const response = await request(app).get("/tasks");
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("GET /tasks/:id", () => {
    test("should respond with a 200 status code if task is found", async () => {
      const response = await request(app).get("/tasks/1");
      if (response.statusCode === 200) {
        expect(response.body).toHaveProperty('id');
      } else {
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error', 'Task not found');
      }
    });

    test("should respond with a 404 status code if task is not found", async () => {
      const response = await request(app).get("/tasks/9999");
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('error', 'Task not found');
    });
  });

  describe("POST /tasks", () => {
    test("should respond with a 201 status code", async () => {
      const response = await request(app).post("/tasks").send({
        name: "New Task"
      });
      expect(response.statusCode).toBe(201);
    });

    test("response should have task id and name", async () => {
      const response = await request(app).post("/tasks").send({
        name: "New Task"
      });
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name', 'New Task');
    });
  });

  describe("PUT /tasks/:id", () => {
    test("should respond with a 200 status code if task is updated", async () => {
      const response = await request(app).put("/tasks/1").send({
        name: "Updated Task",
        complete: true
      });
      if (response.statusCode === 200) {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', 'Updated Task');
        expect(response.body).toHaveProperty('complete', 1);
      } else {
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error', 'Task not found');
      }
    });

    test("should respond with a 404 status code if task is not found", async () => {
      const response = await request(app).put("/tasks/9999").send({
        name: "Updated Task",
        complete: true
      });
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('error', 'Task not found');
    });
  });
});
