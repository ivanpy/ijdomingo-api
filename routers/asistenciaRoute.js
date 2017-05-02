'use stritc'

var express = require('express');
var asistenciaController = require('../controllers/asistenciaController');
var router = express.Router();

//Ruta para buscar por el id del asistencia
router.get('/asistencia/:id', asistenciaController.buscarAsistenciaPorId);

//Ruta para agregar asistencia
router.post('/asistencia/agregar', asistenciaController.agregarAsistencia);

//Route para editar asistencia
router.put('/asistencia/editar/:id', asistenciaController.editarAsistencia);

//Ruta para borrar asistencia
router.delete('/asistencia/borrar/:id', asistenciaController.borrarAsistencia);

//ruta para listar asistencia
router.get('/asistencia', asistenciaController.listarAsistencia);

//Ruta para buscar por el dni y curso
router.get('/asistencia/buscar/:dni/:curso/:fecha', asistenciaController.buscarAsistenciaPorAlumnoYCurso);

module.exports = router;
