'use stritc'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InscripcionSchema = Schema({
	alumno: String,
	curso: String,
	fecinsc: String,
	estadoc: Boolean
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema);
