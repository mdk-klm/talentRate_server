'use strict';

const Hapi = require('@hapi/hapi');
var mysql = require('mysql');

/**
 * Connect DB
 */
var conn = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    /**
     * Manage Route
     */
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    server.route({
        method: 'GET',
        path: '/hello/{name}',
        handler: function (request, h) {

            const name = request.params.name;
            return 'Hello ' + name
        }
    })

    /**
     * Start server
     */
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

/**
 * Close server
 */
process.on('SIGINT', function () {
    console.log('stopping hapi server')

    server.stop({ timeout: 10000 }).then(function (err) {
        console.log('hapi server stopped')
        process.exit((err) ? 1 : 0)
    })
})

init();