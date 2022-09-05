require("dotenv").config();
const express = require('express');
const app = express();
const database = require("./database/conn.js");
const port = process.env.port

app.use(express.static('public'))

//add CRUD functions/paths
app.get('/task', async (req, res) => {
    try {
        const { rows } = await database.query("SELECT * FROM tasks;")
        res.send(rows)
    } catch (error) {
        res.send(error.message);
    }
});

app.get('/task/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await database.query('SELECT * FROM tasks WHERE id=$1;', [id])
        res.json(data.rows)
    } catch (error) {
        res.send(error.message)
    }
});

app.post('/task', async (req, res) => {
    try {
        const { title, description, date_created, urgency, is_complete } = req.body
        const {rows} = await database.query('INSERT INTO tasks (title, description, date_created, urgency, is_complete) VALUES($1, $2, $3, $4, $5);', [title, description, date_created, urgency, is_complete])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
   
})

// app.put('/task/:id', async (req, res) => {

// })

// app.delete('/task/:id', () => {

// })



app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})