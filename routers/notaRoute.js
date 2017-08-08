'use stritc'

var express = require('express');
var notaController = require('../controllers/notaController');
var router = express.Router();

//Ruta para agregar nota
router.post('/nota/agregar', notaController.agregarNota);

//Route para editar nota
router.put('/nota/editar/:id', notaController.editarNota);

//Ruta para borrar nota
router.delete('/nota/borrar/:id', notaController.borrarNota);

//ruta para listar notas
router.get('/notas', notaController.listarNotas);

//Ruta para buscar nota por el dni
router.get('/nota/buscar/dni/:dni', notaController.buscarNotaPorDni);

//Ruta para buscar por el dni y curso
router.get('/nota/buscar/cursodni/:dni/:curso', notaController.buscarNotaPorDniYCurso);

//Ruta para buscar por curso
router.get('/nota/buscar/curso/:curso', notaController.buscarNotaPorCurso);

//Ruta para buscar nota por el id 
router.get('/nota/buscar/id/:id', notaController.buscarNotaPorId);

module.exports = router;
