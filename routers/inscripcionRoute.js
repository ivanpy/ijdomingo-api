'use stritc'

var express = require('express');
var inscripcionController = require('../controllers/inscripcionController');
var router = express.Router();

//Ruta para buscar por el id del inscripcion
router.get('/inscripcion/:id', inscripcionController.buscarInscripcionPorId);

//Ruta para agregar inscripcion
router.post('/inscripcion/agregar', inscripcionController.agregarInscripcion);

//Route para editar inscripcion
router.put('/inscripcion/editar/:id', inscripcionController.editarInscripcion);

//Ruta para borrar inscripcion
router.delete('/inscripcion/borrar/:id', inscripcionController.borrarInscripcion);

//ruta para listar inscripcion
router.get('/inscripciones', inscripcionController.listarInscripciones);

//Ruta para buscar por el dni del inscripcion
router.get('/inscripcion/buscar/:dni', inscripcionController.buscarInscripcionPorDni);

//Ruta para buscar por el dni y curso
router.get('/inscripcion/buscar/:dni/:curso', inscripcionController.buscarInscripcionPorDniYCurso);

//Ruta para buscar por curso
router.get('/inscripcion/buscar/curso/:curso', inscripcionController.buscarInscripcionPorCurso);

//Ruta para buscar por el estado de docuemento
router.get('/inscripcion/buscar/docPendientes', inscripcionController.buscarInscripcionPorEstadoc);

module.exports = router;
