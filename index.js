const db = require('./db');
const express = require('express');

const app = express();
const PORT = 3000;

const todos = [];

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.get('/')

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
