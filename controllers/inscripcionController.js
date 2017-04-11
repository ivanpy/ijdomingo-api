'use stritc'

var Inscripcion = require('../models/inscripcion');


function agregarInscripcion (req, res){
	var parametros = req.body;
	var inscripcion = new Inscripcion();
	inscripcion.alumno = parametros.alumno;
	inscripcion.curso = parametros.curso;
	inscripcion.fecinsc = parametros.fecinsc;
	inscripcion.estado = parametros.estado;
	inscripcion.save((err, inscripcionGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar inscripción"});
		}else{
			res.status(200).send({message: "Dato de la inscripcion guardado", inscripcion: inscripcionGuardado});
		}
	});
}

function editarInscripcion (req, res){
	var id = req.params.id;
	var parametros = req.body;
	inscripcion.findByIdAndUpdate(id, parametros, (err, inscripcionEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar curso", inscripcionId: id});
		}else{
			res.status(200).send({message: "Exito al editar curso", inscripcion: inscripcionEditado});
		}
	});
}

function borrarInscripcion (req, res){
	var id = req.params.id;
	inscripcion.findById(id, (err, inscripcionABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar la inscripcion", inscripcionId: id});
		}
		if(!inscripcionABorrar){
			res.status(404).send({message: "Inscripcion no encontrada"});
		}else{
			inscripcionABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar la inscripcion", inscripcionId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", inscripcion: inscripcionABorrar});
				}
			});
		}
	});

}

function listarInscripciones (req, res){
	Inscripcion.find({}).sort('curso').exec((err, listaInscripciones) => {
		if(err){
			res.status(500).send({message: "Error al listar inscripcion"});
		}else{
			if(!listaInscripciones){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({inscripcion: listaInscripciones});
			}
		}
	});
}

function buscarInscripcionPorAlumno (req, res){

}
function buscarInscripcionPorEstadoc (req, res){

}

function buscarInscripcionPorId (req, res){
	var id = req.params.id;
	Infocurso.findById(id, (err, inscripcionEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar inscripcion", inscripcionId: id});
		}else{
			if(!inscripcionEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({inscripcion: inscripcionEncontrado});
			}
		}
	});
}

module.exports = {
	agregarInscripcion,
	editarInscripcion,
	borrarInscripcion,
	listarInscripciones,
	buscarInscripcionPorAlumno,
	buscarInscripcionPorId
}
