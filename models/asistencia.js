'use stritc'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AsistenciaSchema = Schema({
	alumno: String,
	fecasis: String,
	curso: String,
	estado: String
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema);
