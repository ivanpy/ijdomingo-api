'use stritc'

var express = require("express");
var bodyParser = require('body-parser')
var app = express();

var alumno_router = require('./routers/alumnoRoute');
var asistencia_router = require('./routers/asistenciaRoute');
var curso_router = require('./routers/cursoRoute');
var inscripcion_router = require('./routers/inscripcionRoute');
var infocurso_router = require('./routers/infocursoRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Config HTTP HEAD (Cors, Method)
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
	res.header('Allow', 'GET, POST, OPTIONS, DELETE, PUT');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/api', alumno_router);
app.use('/api', asistencia_router);
app.use('/api', curso_router);
app.use('/api', inscripcion_router);
app.use('/api', infocurso_router);

module.exports = app;
