'use stritc'

var Inscripcion = require('../models/inscripcion');


function agregarInscripcion (req, res){
	var parametros = req.body;
	var inscripcion = new Inscripcion();
	inscripcion.dni = parametros.dni;
	inscripcion.alumno = parametros.alumno;
	inscripcion.curso = parametros.curso;
	inscripcion.fecinsc = parametros.fecinsc;
	inscripcion.estadoc = parametros.estadoc;
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
	Inscripcion.findByIdAndUpdate(id, parametros, (err, inscripcionEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar curso", inscripcionId: id});
		}else{
			res.status(200).send({message: "Exito al editar curso", inscripcion: inscripcionEditado});
		}
	});
}

function borrarInscripcion (req, res){
	var id = req.params.id;
	Inscripcion.findById(id, (err, inscripcionABorrar) => {
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
	Inscripcion.find({ estado: true }).sort('curso').exec((err, listaInscripciones) => {
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

function buscarInscripcionPorDni (req, res){
	var dni = req.params.dni;
	Inscripcion.find({ dni: dni, estado: true }).sort('curso').exec((err, resultadoInscripcion) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoInscripcion){
				res.status(404).send({message: "Las inscripciones no para este Dni no fueron encontradas", dni: dni});
			}else{
				res.status(200).send({resultadoInscripcion: resultadoInscripcion});
			}
		}
	});
}

function buscarInscripcionPorDniYCurso (req, res){
	var dni = req.params.dni;
	var curso = req.params.curso;
	var dni = req.params.dni;
	Inscripcion.find({ dni: dni, curso: curso, estado: true }).sort('curso').exec((err, resultadoInscripcion) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoInscripcion){
				res.status(404).send({message: "Inscripcion no encontrada"});
			}else{
				res.status(200).send({resultadoInscripcion: resultadoInscripcion});
			}
		}
	});
}

function buscarInscripcionPorCurso (req, res){
	var curso = req.params.curso;
	Inscripcion.find({ curso: curso, estado: true }).sort('alumno').exec((err, resultadoInscripcion) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoInscripcion){
				res.status(404).send({message: "Inscripcion no encontrada"});
			}else{
				res.status(200).send({resultadoInscripcion: resultadoInscripcion});
			}
		}
	});
}

function buscarInscripcionPorEstadoc (req, res){
	Inscripcion.find({ estadoc: false, estado: true }).sort('alumno').exec((err, estadoDocumentos) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!estadoDocumentos){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({estados: estadoDocumentos});
			}
		}
	});
}

function buscarInscripcionPorId (req, res){
	var id = req.params.id;
	Inscripcion.findById(id, (err, inscripcionEncontrado) => {
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
	buscarInscripcionPorDni,
	buscarInscripcionPorDniYCurso,
	buscarInscripcionPorId,
	buscarInscripcionPorEstadoc,
	buscarInscripcionPorCurso
}
