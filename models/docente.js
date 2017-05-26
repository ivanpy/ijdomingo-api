'use stritc'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocenteSchema = Schema({
	nombre: String,
	apellido: String,
	nacionalidad: String,
	fecnac: String,
	dni: String,
	sexo: String,
	email: String,
	fijo: String,
	celular: String,
	provincia: String,
	localidad: String,
	domicilio: String,
	barrio: String,
	ocupacion: String
});

module.exports = mongoose.model('Docente', DocenteSchema);
