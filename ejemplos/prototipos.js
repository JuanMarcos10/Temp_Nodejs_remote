'use strict';
// definimos un constructor de objetos
function Persona(nombre, apellidos) {
  this.nombre = nombre; 
  this.apellidos = apellidos;
}

// añadir el método saluda al prototipo de Persona
Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre, this.apellidos); }
Persona.prototype.despidete = function() { console.log('adios soy', this.nombre, this.apellidos); }

const luis = new Persona('Luis', 'Montoya');

luis.saluda();
luis.despidete();
setTimeout(luis.saluda.bind(luis), 2000);
// Herencia de Persona -----------------------------------

function Agente(nombre) {
// heredar el comportamiento del constructor de las Personas
  Persona.call(this, nombre); }
// heredar propiedades y métodos de las Personas poniendo una Persona como prototipo de los agentes
Agente.prototype = Object.create(Persona.prototype); // un objeto vacio cuyo prototipo es una Persona
Agente.prototype.constructor = Agente;

// Podemos si queremos sobre escribir algunos métodos
// Agente.prototype.saluda = function() { console.log('Agente saludando', this.nombre); }
const smith = new Agente('Mike', 'Smith');
smith.saluda();
//smith.despidete();
// Herencia múltiple -------------------------------------
function Superheroe() {
  this.vuela = function() { console.log(this.nombre, 'vuela'); }
  this.esquivaBalas = function() { console.log(this.nombre, 'esquiva balas'); } }

// copiamos las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());
smith.vuela();
smith.esquivaBalas();


/* HIGH-ORDER FUNCTIONS*/
function multiplicador(x) {
  return function (y) {
      return x * y;
  }
} 
let doblar = multiplicador(2);
// let triple = multiplicador(3);
console.log("High-order Functions (doblar): " + doblar(10));  
// console.log("High-order Functions (triple): " + triple(10));  

/* FUNCION COMO PARAMETRO */ 
let numbers = [1, 2.6, 3, 4, 5, 6, 7.8, 8, 9.6, 10];
function filter(filterFunction, array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
      if (filterFunction(array[i])) {
      result.push(array[i]);
      }
  }
  return result;
}
let result2 = filter(number => {
  if (number % 2 === 0) return true;
}, numbers);

let result3 = filter(number => number % 3 === 0, numbers);
console.log("High-order Functions (filtrar): ");
console.log(result2);
console.log("High-order Functions (filtrar fn simplificado): ");
console.log(result3);
let mapa =  numbers.map(Math.ceil);
console.log("High-order Functions (filtrar): ");
console.log(mapa);