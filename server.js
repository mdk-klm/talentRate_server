const mysql = require('mysql');
const express = require('express');
const app = express();

/**
 * Connect DB
 */
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '21031992Hanna',
    database: 'talentTrate',
});
conn.connect();

/**
 * Routes
 */
app.get('/', function (req, res) {
    res.send('Hello World')
});
app.get('/test', function (req, res) {
    conn.query('SELECT name FROM PARCOURS_PEDAGOGIQUE', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({ results }));
    });
})

/**
 * Start server
 */
app.listen(3000);
console.log('Server running on port : 3000');