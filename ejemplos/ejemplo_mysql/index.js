'use strict';
// cargar el driver
const mysql = require('mysql');

// crear una conexion
const conexion = mysql.createConnection({
host : 'didimo.es',
user : 'usuariocurso',
password : 'us3r',
database : 'cursonode'
});

conexion.connect(); // callback opcional

conexion.query('SELECT * FROM agentes', function(err, rows, fields) {
if (err) {
    console.log('Error', err);
    process.exit(1);
}

console.log(rows);

conexion.end();
});
