'use stritc'

var express = require('express');
var inscripcionController = require('../controllers/inscripcionController');
var router = express.Router();

//Ruta para buscar por el id del inscripcion
router.get('/inscripcion/:id', infocursoController.buscarInscripcionPorId);

//Ruta para agregar inscripcion
router.post('/inscripcion/agregar', inscripcionController.agregarInscripcion);

//Route para editar inscripcion
router.put('/inscripcion/editar/:id', inscripcionController.editarInscripcion);

//Ruta para borrar inscripcion
router.delete('/inscripcion/borrar/:id', inscripcionController.borrarInscripcion);

//ruta para listar inscripcion
router.get('/inscripcion', inscripcionController.listarInscripcion);

module.exports = router;
