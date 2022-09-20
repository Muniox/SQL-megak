const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '<3database^_^',
    database: 'megak_todo',
    namedPlaceholders: true,
    decimalNumbers: true
});

module.exports = {
    pool
};