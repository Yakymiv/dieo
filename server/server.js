const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const pool = require('./db');

const pathOfClient = '../client/build';

app.use(express.static(path.resolve(pathOfClient)));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.resolve(pathOfClient + '/index.html'))
});

app.get('/die', async(req, res) => {
    try {
        const data = {};
        const page = req.query.page;
        const limit = 30;
        const startIndex = (page - 1) * limit;
        const getAllDieOrders = await pool.query('SELECT * FROM orderbase ORDER BY -id LIMIT $1 OFFSET $2', [limit, startIndex]);
        const rowCount = await pool.query('SELECT count(*) FROM orderbase');
        const pagRow = Math.ceil(rowCount.rows[0].count / limit);
        data.maxPage = pagRow;
        data.rows = getAllDieOrders.rows;
        res.send(data);
    } catch (err) {
        console.error(err.message);
    }
})

app.post('/die', async(req, res) => {
    try {
        const { machine, app, material, mechanic } = req.body;
        console.log(req.body);
        const addDieOrder = await pool.query(
            'INSERT INTO orderbase (machine, app, material, mechanic, ordertime, orderstatus)'
            + 'VALUES ( $1, $2, $3, $4, now(), false ) RETURNING *',
            [machine, app, material, mechanic]
        );
        res.send(addDieOrder.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.put('/die/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const changeDieOrder = await pool.query(
            'UPDATE orderbase SET orderstatus = true WHERE id = $1 RETURNING *', [id]
        )
        res.send(changeDieOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/die/machines', async(req, res) => {
    try {
        const getAllMachines = await pool.query('SELECT * FROM machinesnumb');
        res.send(getAllMachines.rows);
    } catch (err) {
        console.error(err.message)
    }
});

app.get('/die/mechanic', async(req, res) => {
    try {
        const getAllMechanic = await pool.query('SELECT * FROM mechaniclist');
        res.send(getAllMechanic.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/die/tools', async(req, res) => {
    try {
        const getAllTools = await pool.query('SELECT * FROM tools');
        res.send(getAllTools.rows);
    } catch (err) {
        console.error(err.message);
    }
})
 
app.listen(5000, () => {
   console.log('Server started in port 5000'); 
});