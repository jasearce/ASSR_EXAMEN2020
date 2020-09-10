const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysqlpa$$',
        database: 'prueba_covid',
        port: '3306',
    });
}