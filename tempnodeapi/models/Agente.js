'use strict';

const mongoose = require('mongoose');

// definimos el esquema
const agenteSchema = mongoose.Schema({
    name: { type: String, index: true }, 
    age:  { type: Number, index: true }
    }, { collection: 'agentes' });


// creamos un metodo estatico
agenteSchema.statics.listar = (filtro, skip, limit, fields, sort) => {
    const query = Agente.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
};
// en los metodos de instancias no usar arrow functions para permitir a mongoose inyectar this

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

/* Agente.find().exec((err, agentes) => {
    console.log(agentes);
}); */

module.exports = Agente;