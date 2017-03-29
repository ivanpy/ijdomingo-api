'use stritc'

var express = require('express');
var alumnoController = require('../controllers/alumnoController');
var router = express.Router();

//Ruta para buscar por el id del alumno
router.get('/alumno/:id', alumnoController.buscarAlumnoPorId);

//Ruta para agregar alumno
router.post('/alumno/agregar', alumnoController.agregarAlumno);

//Route para editar alumno
router.put('/alumno/editar/:id', alumnoController.editarAlumno);

//Ruta para borrar alumno
router.delete('/alumno/borrar/:id', alumnoController.borrarAlumno);

//ruta para listar alumno
router.get('/alumnos', alumnoController.listarAlumnos);

module.exports = router;
