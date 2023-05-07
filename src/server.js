'use strict';

const express = require('express');
const pool = require('./database')
// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/registrar/:name', async(req, res) => {

  const name = req.params.name;
  const conn = await pool.getConnection();

  const query = 'INSERT INTO names VALUE (?)'

  const result = await conn.query(query, req.body);

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);