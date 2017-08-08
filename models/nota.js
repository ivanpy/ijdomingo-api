'use stritc'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotaSchema = Schema({
	dni: String,
	alumno: String,
	curso: String,
	exaparcial: Number,
	exafinal: Number,
	exatotal: Number,
	asistencia: Number,
	periodo: String
});

module.exports = mongoose.model('Nota', NotaSchema);
