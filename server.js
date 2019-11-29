const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Connect DB
 */
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 't,JKa9R5ODA0vld5N',
    database: 'talent_rate_djer',
});
conn.connect();
/**
 * Routes test
 */
app.get('/', function (req, res) {
    res.send('home');
});
/**
 * Routes app parcours
 */
app.get('/parcours', function (req, res) {
    conn.query('SELECT * FROM parcours_pedagogique', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
app.get('/parcours/:id', (req, res) => {
    conn.query(`SELECT * FROM parcours_pedagogique WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
app.post('/parcours', (req, res) => {
    let name = req.body.name;
    conn.query(`INSERT INTO parcours_pedagogique (nom) VALUES ('${name}')`, (error, results, fields) => {
        if (error) throw error;
        res.send('parcours ajouté');
    });
});
app.delete('/parcours/:id', (req, res) => {
    conn.query(`DELETE FROM parcours_pedagogique WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) throw error;
        res.send('Parcours supprimé avec succès');
    })
})

/**
 * Routes app promotion
 */
app.get('/promotions', function (req, res) {
    conn.query('SELECT * FROM promotion', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
app.get('/promotions/:id', function (req, res) {
    conn.query(`SELECT * FROM promotion WHERE id=${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
app.post('/promotions', (req, res) => {
    let name = req.body.name;
    let parcPedId = req.body.parcPedId;
    conn.query(`INSERT INTO promotion (nom, parcours_pedagogique_id) VALUES ('${name}', ${parcPedId})`, (error, results, fields) => {
        if (error) throw error;
        res.send('promotion ajoutée');
    });
});
app.delete('/promotions/:id', (req, res) => {
    conn.query(`DELETE FROM promotion WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) throw error;
        res.send('Promotion supprimée avec succès');
    })
})
/**
 * Route cours
 */
app.get('/cours', (req, res) => {
    conn.query(`SELECT * from cours`, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


/**
 * Start server
 */
app.listen(3000);
console.log('Server running on port : 3000');