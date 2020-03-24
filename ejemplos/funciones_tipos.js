console.clear();
/* FUNCION NORMAL */
function normal (a, b) {
    let result;
    result = a + b;
    console.log(`Funcion normal = ${result}`);
}
normal (11, 21);

/* FUNCION NORMAL COMO VARIABLE */
let normalVariable = function (a, b) {
    let result;
    result = a + b;
    console.log(`Funcion normal como Variable = ${result}`);
}
normalVariable (1, 3);

/* FUNCION NORMAL COMO VARIABLE TIPO ARROW FUNCTION*/
let normalVariableAF = (a, b) => {
    let result;
    result = a + b;
    console.log(`Funcion normal como Variable tipo Arrow Function = ${result}`);
}
normalVariableAF (2, 4);

/* FUNCION METODO - DENTRO DE UN OBJETO */
let metodoCalculadora = {
    suma : function (a, b) { return a + b; }, 
    resta : function (a, b) { return a - b; }, 
    producto : (a, b) => { return a * b }  
}
console.log(`Suma: ${metodoCalculadora.suma(6,2)} - Resta: ${metodoCalculadora.resta(6,2)} - Producto: ${metodoCalculadora.producto(6,2)}`);

/* FUNCION INSTANCIAS */
function Fruta (nombre, color) {
    this.nombre = nombre; 
    this.color = color;
    };
let limon = new Fruta('Limon', 'Amarillo');
let naranja = new Fruta('Naranja', 'Naranja' )
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
unback(2, 5, function () { console.log(`a: ${a} - b: ${b} - Resultado: ${result}`) });

/* FUNCION CALLBACK UTILIZANDO SETTIMEOUT */
function unbackSTO (a, b, Callback) {
    this.a = a;
    this.b = b;
    result = a + b;
    Callback(result);
}
unbackSTO(12, 5, function () { 
        setTimeout(() => {
            console.log(`a: ${a} - b: ${b} - Resultado: ${result}`) 
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
delay2sec("texto1", function() {
    delay2sec("texto2", function() { 
        delay2sec("texto3", function() {
            delay2sec("termino", () => {return;});
        });
    });
});