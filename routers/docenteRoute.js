'use stritc'

var express = require('express');
var docenteController = require('../controllers/docenteController');
var router = express.Router();

//Ruta para buscar por el id del docente
router.get('/docentes/buscar/id/:id', docenteController.buscarDocentePorId);

//Ruta para agregar docente
router.post('/docente/agregar', docenteController.agregarDocente);

//Route para editar docente
router.put('/docente/editar/:id', docenteController.editarDocente);

//Ruta para borrar docente
router.delete('/docente/borrar/:id', docenteController.borrarDocente);

//ruta para listar docente
router.get('/docentes', docenteController.listarDocentes);

//Ruta para buscar por dni
router.get('/docentes/buscar/dni/:dni', docenteController.buscarDocentePorDni);

module.exports = router;
