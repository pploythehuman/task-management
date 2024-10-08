import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/tasks", (req, res) => {
  const query = "SELECT * FROM task";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const query = "SELECT * FROM task WHERE id = ?";
  db.query(query, [taskId], (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (data.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.json(data[0]);
  });
});

app.post("/tasks", (req, res) => {
  const query = "INSERT INTO task (`name`) VALUES (?)";
  const values = [req.body.name];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const taskId = result.insertId;
    const selectQuery = "SELECT * FROM task WHERE id = ?";

    db.query(selectQuery, [taskId], (err, data) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json(data[0]);
    });
  });
});

app.put("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const { name, complete } = req.body;

  const checkQuery = "SELECT * FROM task WHERE id = ?";
  db.query(checkQuery, [taskId], (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (data.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    let updateQuery = "UPDATE task SET ";
    const updateValues = [];

    if (name !== undefined) {
      updateQuery += "`name` = ?";
      updateValues.push(name);
    }

    if (complete !== undefined) {
      if (updateValues.length > 0) {
        updateQuery += ", ";
      }
      updateQuery += "`complete` = ?";
      updateValues.push(complete);
    }

    updateQuery += " WHERE `id` = ?";
    updateValues.push(taskId);

    db.query(updateQuery, updateValues, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const selectQuery = "SELECT * FROM task WHERE id = ?";
      db.query(selectQuery, [taskId], (err, data) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        res.status(200).json(data[0]);
      });
    });
  });
});

export default app
