'use stritc'

var Curso = require('../models/curso');


function agregarCurso (req, res){
	var parametros = req.body;
	var curso = new Curso();
	curso.nombre = parametros.nombre;
	curso.save((err, cursoGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar el curso"});
		}else{
			res.status(200).send({message: "Curso guardado", curso: cursoGuardado});
		}
	});
}

function editarCurso (req, res){
	var id = req.params.id;
	var parametros = req.body;
	Alumno.findByIdAndUpdate(id, parametros, (err, cursoEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar curso", cursoId: id});
		}else{
			res.status(200).send({message: "Exito al editar alumno", curso: cursoEditado});
		}
	});
}

function borrarCurso (req, res){
	var id = req.params.id;
	Alumno.findById(id, (err, cursoABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el curso", cursoId: id});
		}
		if(!cursoABorrar){
			res.status(404).send({message: "Curso no encontrado"});
		}else{
			cursoABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar el curso", cursoId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", curso: cursoABorrar});
				}
			});
		}
	});

}

function listarCursos (req, res){
	curso.find({}).sort('nombre').exec((err, listCurso) => {
		if(err){
			res.status(500).send({message: "Error al listar cursos"});
		}else{
			if(!listCurso){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({curso: listCursos});
			}
		}
	});
}

function buscarCursoPorId (req, res){
	var id = req.params.id;
	Curso.findById(id, (err, cursoEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el curso", cursoId: id});
		}else{
			if(!cursoEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({curso: cursoEncontrado});
			}
		}
	});
}

module.exports = {
	agregarCurso,
	editarCurso,
	borrarCurso,
	listarCursos,
	buscarCursoPorId
}
