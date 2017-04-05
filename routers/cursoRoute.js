'use stritc'

var express = require('express');
var cursoController = require('../controllers/cursoController');
var router = express.Router();

//Ruta para buscar por el id del curso
router.get('/curso/:id', cursoController.buscarCursoPorId);

//Ruta para agregar curso
router.post('/curso/agregar', cursoController.agregarCurso);

//Route para editar curso
router.put('/curso/editar/:id', cursoController.editarCurso);

//Ruta para borrar curso
router.delete('/curso/borrar/:id', cursoController.borrarCurso);

//ruta para listar curso
router.get('/cursos', cursoController.listarCursos);

module.exports = router;
