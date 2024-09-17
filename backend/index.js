import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'task-management'
})

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

app.listen(8800, () => {
  console.log('Connected to backend!')
})
