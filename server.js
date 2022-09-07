require("dotenv").config();
const express = require('express');
const app = express();
// const database = require("./database/conn.js");
const port = 3003;
const cors = require("cors")
const {Pool} = require('pg')

const pool = new Pool({
    user: 'Wickd',
    password: 'whatever',
    host: 'localhost',
    port: 5432,
    database: 'mvp'
});

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

//add CRUD functions/paths
app.get('/task', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tasks;')
        res.json(rows)
    } catch (error) {
        res.json(error.message);
    }
});

app.get('/task/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await pool.query('SELECT * FROM tasks WHERE id=$1;', [id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
});

app.post('/task', async (req, res) => {
    try {
        const { description } = req.body
        const { rows } = await pool.query('INSERT INTO tasks (description) VALUES($1) RETURNING *;', [description])
        console.log(description)
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }

})

app.put('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body
        const { rows } = await pool.query('UPDATE tasks SET description = $1 WHERE id = $2;', [description, id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
})

app.delete('/task/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await pool.query('DELETE FROM tasks WHERE id = $1', [id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
})



app.listen(port, () => {
    console.log(`listening...`)
})