const db = require('../backend/db');
const express = require('express');
const { pool } = require("../backend/db")
const cors = require("cors")
const app = express();
const PORT = 3003;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.get("/todos", async (req, res) => {

    try {
       const todos = await pool.query(`SELECT * FROM todos;`);
       console.log(todos);
       res.json(todos.rows);
     } catch (error) {
       res.status(500).send("Oops something went wrong");
     }
    
   })

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
