'use stritc'

var Asistencia = require('../models/asistencia');


function agregarAsistencia (req, res){
	var parametros = req.body;
	var asistencia = new Asistencia();
	asistencia.alumno = parametros.alumno;
	asistencia.curso = parametros.curso;
	asistencia.fecasis = parametros.fecasis;
	asistencia.estado = parametros.estado;
	asistencia.save((err, asistenciaGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar asistencia"});
		}else{
			res.status(200).send({message: "Asistencia guardada", asistencia: asistenciaGuardado});
		}
	});
}

function editarAsistencia (req, res){
	var id = req.params.id;
	var parametros = req.body;
	asistencia.findByIdAndUpdate(id, parametros, (err, asistenciaEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar asistencia", asistenciaId: id});
		}else{
			res.status(200).send({message: "Exito al editar asistencia", asistencia: asistenciaEditado});
		}
	});
}

function borrarAsistencia (req, res){
	var id = req.params.id;
	asistencia.findById(id, (err, asistenciaABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar la asistencia", asistenciaId: id});
		}
		if(!asistenciaABorrar){
			res.status(404).send({message: "asistencia no encontrada"});
		}else{
			asistenciaABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar la asistencia", asistenciaId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", asistencia: asistenciaABorrar});
				}
			});
		}
	});

}

function listarAsistencia (req, res){
	asistencia.find({}).sort('alumno').exec((err, listAsistencia) => {
		if(err){
			res.status(500).send({message: "Error al listar asistencia"});
		}else{
			if(!listarInscripcion){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({asistencia: listAsistencia});
			}
		}
	});
}

function buscarAsistenciaPorAlumno (req, res){

}
function buscarAsistenciaPorId (req, res){
	var id = req.params.id;
	asistencia.findById(id, (err, asistenciaEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar asistencia", asistenciaId: id});
		}else{
			if(!asistenciaEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({asistencia: asistenciaEncontrado});
			}
		}
	});
}

module.exports = {
	agregarAsistencia,
	editarAsistencia,
	borrarAsistencia,
	listarAsistencia,
	buscarAsistenciaPorAlumno,
	buscarAsistenciaPorId
}
