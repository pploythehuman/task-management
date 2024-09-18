import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express();
const port = 8800;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'task-management'
})

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/tasks", (req, res) => {
  const query = "SELECT * FROM task"
  db.query(query, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post("/tasks", (req, res) => {
  const query = "INSERT INTO task (`name`) VALUES (?)"
  const values = ["name from backend"]

  db.query(query, values, (err, data) => {
    if (err) return res.json(err)
    return res.json("Task has been created successfully")
  })
})

app.listen(port, () => {
  console.log('Connected to backend!')
})
