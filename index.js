'use strict';

// cargar librería http
const http = require('http');
//Load Chance
const Chance = require('chance');

// Instantiate Chance so it can be used
const chance = new Chance();

// definir un servidor
const server = http.createServer(function(request, response){
response.writeHead(200,{'Content-type': 'text/html'});
response.end(`Wake up, <b>${chance.animal()}</b>. You are <b>${chance.age()}</b> years old.`);
})

// arrancar el servidor (el puerto que sea superior a 1024 para que no requiera uso Administrador)
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
