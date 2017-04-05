'use stritc'

var express = require("express");
var bodyParser = require('body-parser')
var app = express();

var alumnoRouter = require('./routers/alumnoRoute');
var asistenciaRouter = require('./routers/asistenciaRouter');
var cursoRouter = require('./routers/cursoRouter');
var inscripcionRouter = require('./routers/inscripcionRouter');
var infocursoRouter = require('./routers/infocursoRouter');

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

app.use('/api', alumnoRouter);
app.use('/api', asistenciaRouter);
app.use('/api', cursoRouter);
app.use('/api', inscripcionRouter);
app.use('/api', infocursoRouter);

module.exports = app;
