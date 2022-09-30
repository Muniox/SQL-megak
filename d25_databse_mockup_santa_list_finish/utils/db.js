const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    database: process.env.DB,
    port: process.env.DBPORT,
    password: process.env.DBPASSWORD,
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
};