'use stritc'

var Infocurso = require('../models/infocurso');


function agregarInfocurso (req, res){
	var parametros = req.body;
	var infocurso = new Infocurso();
	infocurso.curso = parametros.curso;
	infocurso.fecini = parametros.fecini;
	infocurso.fecfin = parametros.fecfin;
	infocurso.duracion = parametros.duracion;
	infocurso.cargahor = parametros.cargahor;
	infocurso.save((err, infocursoGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar información del curso"});
		}else{
			res.status(200).send({message: "Dato del curso guardado", infocurso: infocursoGuardado});
		}
	});
}

function editarInfocurso (req, res){
	var id = req.params.id;
	var parametros = req.body;
	Infocurso.findByIdAndUpdate(id, parametros, (err, infocursoEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar curso", infocursoId: id});
		}else{
			res.status(200).send({message: "Exito al editar curso", infocurso: infocursoEditado});
		}
	});
}

function borrarInfocurso (req, res){
	var id = req.params.id;
	Infocurso.findById(id, (err, infocursoABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el curso", infocursoId: id});
		}
		if(!infocursoABorrar){
			res.status(404).send({message: "curso no encontrado"});
		}else{
			infocursoABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar el curso", infocursoId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", infocurso: infocursoABorrar});
				}
			});
		}
	});

}

function listarInfocurso (req, res){
	Infocurso.find({}).sort('curso').exec((err, listInfocursos) => {
		if(err){
			res.status(500).send({message: "Error al listar Información de este curso"});
		}else{
			if(!listarInfocursos){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({infocurso: listInfocursos});
			}
		}
	});
}

function buscarInfocursoPorCurso (req, res){

}

function buscarInfocursoPorId (req, res){
	var id = req.params.id;
	Infocurso.findById(id, (err, infocursoEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar Información para este curso", infocursoId: id});
		}else{
			if(!infocursoEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({infocurso: infocursoEncontrado});
			}
		}
	});
}

module.exports = {
	agregarInfocurso,
	editarInfocurso,
	borrarInfocurso,
	listarInfocurso,
	buscarInfocursoPorCurso,
	buscarInfocursoPorId
}
