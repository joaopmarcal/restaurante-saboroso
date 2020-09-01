const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'joao',
    database: 'saboroso',
    password: 'joao',
    multipleStatements: true
});

module.exports = connection;