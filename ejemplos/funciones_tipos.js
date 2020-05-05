console.clear();
/* FUNCION NORMAL */
function normal (a, b) {
    let result;
    result = a + b;
    console.log(`Funcion normal = ${result}`);
}
// normal (11, 21);

/* FUNCION NORMAL COMO VARIABLE */
let normalVariable = function (a, b) {
    let result;
    result = a + b;
    console.log(`Funcion normal como Variable = ${result}`);
}
// normalVariable (1, 3);

/* FUNCION NORMAL COMO VARIABLE TIPO ARROW FUNCTION*/
let normalVariableAF = (a, b) => {
    let result;
    result = a + b;
    console.log(`Funcion normal como Variable tipo Arrow Function = ${result}`);
}
// normalVariableAF (2, 4);

/* FUNCION METODO - DENTRO DE UN OBJETO */
let metodoCalculadora = {
    suma : function (a, b) { return a + b; }, 
    resta : function (a, b) { return a - b; }, 
    producto : (a, b) => { return a * b }  
}
// console.log(`Funcion metodo = Suma: ${metodoCalculadora.suma(6,2)} - Resta: ${metodoCalculadora.resta(6,2)} - Producto: ${metodoCalculadora.producto(6,2)}`);

/* FUNCION INSTANCIAS */
function Fruta (nombre, color) {
    this.nombre = nombre; 
    this.color = color;
    };
let limon = new Fruta('Limon', 'Amarillo');
let naranja = new Fruta('Naranja', 'Naranja' )
console.log("Funcion Instancias:");
console.log(limon);
console.log(naranja);
// let stringy = JSON.stringify(limon);
// console.log(stringy);
// let parsy = JSON.parse(stringy);
// console.log(parsy);

/* FUNCION CALLBACK SIMPLE */
function unback (a, b, Callback) {
    this.a = a;
    this.b = b;
    result = a + b;
    Callback(result);
}
unback(2, 5, function () { console.log(`Funcion callback simple = a: ${a} - b: ${b} - Resultado: ${result}`) });

/* FUNCION CALLBACK UTILIZANDO SETTIMEOUT */
function unbackSTO (a, b, Callback) {
    this.a = a;
    this.b = b;
    result = a + b;
    Callback(result);
}
unbackSTO(12, 5, function () { 
        setTimeout(() => {
            console.log(`Funcion Callback con SetTimeout = a: ${a} - b: ${b} - Resultado: ${result}`) 
        }, 1000); 
    }
);

/* FUNCION CALLBACK UTILIZANDO SETTIMEOUT EN BUCLE */
function delay2sec (texto, Callback) {
    setTimeout(() => {
        console.log(texto);
        Callback();
    }, 1000);
}
delay2sec("Funcion callback con SetTimeout en bucle = texto1", function() {
    delay2sec("Funcion callback con SetTimeout en bucle = texto2", function() {
            delay2sec("Funcion callback con SetTimeout en bucle = termino", () => {return;});
    });
});

/* FUNCIONES PROTOTIPOS */ 
function Persona (nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
}
Persona.prototype.getNombre = function () {
    return `${this.nombre} ${this.apellidos}`;
}
let brucelee = new Persona('Bruce', 'Lee');
let persona1 = new Persona('Juan', 'De la Cierva');
console.log("Funciones prototipos = " + brucelee.getNombre());
console.log("Funciones prototipos = " + persona1.getNombre());
// Persona.prototype.getNombre = function () {
//    return `${this.nombre}`; }
// console.log("Funciones prototipos modificadas = " + brucelee.getNombre());
// console.log("Funciones prototipos modificadas = " + persona1.getNombre());


/* FUNCIONES CLOSURES */ 
function creaAgente(nombre) {
    let edad = 20;
    return {
      getNombre: function() { // esta función siempre, siempre, donde esté, podrá acceder a nombre y edad
        return nombre;
      },
      setNombre(valor) {
        nombre = valor;
      },
      saluda: function() {
        console.log('Funcion Closure = Hola soy', nombre);
      }
    }
  }
  const jones = creaAgente('Jones');
  setTimeout(jones.saluda, 4000);
  // console.log(jones);
  // console.log(jones.edad);
