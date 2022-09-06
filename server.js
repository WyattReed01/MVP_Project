require("dotenv").config();
const express = require('express');
const app = express();
const database = require("./database/conn.js");
const port = process.env.PORT || 3003
const cors = require("cors")

app.use(cors())
app.use(express.static('public'))

//add CRUD functions/paths
app.get('/task', async (req, res) => {
    try {
        const { rows } = await database.query("SELECT * FROM tasks;")
        res.json(rows)
    } catch (error) {
        res.json(error.message);
    }
});

app.get('/task/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await database.query('SELECT * FROM tasks WHERE id=$1;', [id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
});

app.post('/task', async (req, res) => {
    try {
        const { description } = req.body
        const { rows } = await database.query('INSERT INTO tasks (description) VALUES($1) RETURNING *;', [description])
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
        const { rows } = await database.query("UPDATE tasks SET description = $1 WHERE id = $2;", [description, id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
})

app.delete('/task/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await database.query("DELETE FROM tasks WHERE id = $1", [id])
        res.json(rows)
    } catch (error) {
        res.json(error.message)
    }
})



app.listen(port, () => {
    console.log(`listening...`)
})