'use stritc'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InfocursoSchema = Schema({
	curso: String,
	fecini: String,
	fecfin: String,
	duracion: String,
	cargahor: String
});

module.exports = mongoose.model('Infocurso', InfocursoSchema);
