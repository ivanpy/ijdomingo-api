'use stritc'

var express = require('express');
var infocursoController = require('../controllers/infocursoController');
var router = express.Router();

//Ruta para buscar por el id del infocurso
router.get('/infocurso/:id', infocursoController.buscarInfocursoPorId);

//Ruta para agregar infocurso
router.post('/infocurso/agregar', infocursoController.agregarInfocurso);

//Route para editar infocurso
router.put('/infocurso/editar/:id', infocursoController.editarInfocurso);

//Ruta para borrar infocurso
router.delete('/infocurso/borrar/:id', infocursoController.borrarInfocurso);

//ruta para listar infocurso
router.get('/infocursos', infocursoController.listarInfocurso);

module.exports = router;
