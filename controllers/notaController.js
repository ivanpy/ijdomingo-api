'use stritc'

var Nota = require('../models/nota');


function agregarNota (req, res){
	var parametros = req.body;
	var nota = new Nota();
	nota.dni = parametros.dni;
	nota.alumno = parametros.alumno;
	nota.curso = parametros.curso;
	nota.exaparcial = parametros.exaparcial;
	nota.exafinal = parametros.exafinal;
	nota.exatotal = parametros.exatotal;
	nota.asistencia = parametros.asistencia;
	nota.periodo = parametros.periodo;
	nota.save((err, notaGuardada) => {
		if(err){
			res.status(500).send({message: "Error al guardar la nota"});
		}else{
			res.status(200).send({message: "Datos de nota guardados", nota: notaGuardada});
		}
	});
}

function editarNota (req, res){
	var id = req.params.id;
	var parametros = req.body;
	Nota.findByIdAndUpdate(id, parametros, (err, notaEditada) => {
		if(err){
			res.status(500).send({message: "Error al editar la nota", notaId: id});
		}else{
			res.status(200).send({message: "Exito al editar la nota", nota: notaEditada});
		}
	});
}

function borrarNota (req, res){
	var id = req.params.id;
	Nota.findById(id, (err, notaABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar la nota", notaId: id});
		}
		if(!notaABorrar){
			res.status(404).send({message: "Nota no encontrada"});
		}else{
			notaABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar la nota", notaId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", nota: notaABorrar});
				}
			});
		}
	});

}

function listarNotas (req, res){
	Nota.find({}).sort('curso').exec((err, listaNotas) => {
		if(err){
			res.status(500).send({message: "Error al listar las notas"});
		}else{
			if(!listaNotas){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({notas: listaNotas});
			}
		}
	});
}

function buscarNotaPorDni (req, res){
	var dni = req.params.dni;
	Nota.find({ dni: dni }).sort('curso').exec((err, resultadoBusqueda) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoBusqueda){
				res.status(404).send({message: "La nota para este dni no fue encontrada", dni: dni});
			}else{
				res.status(200).send({notaPorDni: resultadoBusqueda});
			}
		}
	});
}

function buscarNotaPorDniYCurso (req, res){
	var dni = req.params.dni;
	var curso = req.params.curso;
	Nota.find({ dni: dni, curso: curso }).sort('curso').exec((err, resultadoBusqueda) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoBusqueda){
				res.status(404).send({message: "Nota no encontrada"});
			}else{
				res.status(200).send({notasDniCurso: resultadoBusqueda});
			}
		}
	});
}

function buscarNotaPorCurso (req, res){
	var curso = req.params.curso;
	Nota.find({ curso: curso }).sort('alumno').exec((err, resultadoBusqueda) => {
		if(err){
			res.status(500).send({message: "Error del servidor"});
		}else{
			if(!resultadoBusqueda){
				res.status(404).send({message: "Nota no encontrada"});
			}else{
				res.status(200).send({notaCurso: resultadoBusqueda});
			}
		}
	});
}

function buscarNotaPorId (req, res){
	var id = req.params.id;
	Nota.findById(id, (err, resultadoBusqueda) => {
		if(err){
			res.status(500).send({message: "Error al encontrar la nota", notaId: id});
		}else{
			if(!resultadoBusqueda){
				res.status(404).send({message: "Nota no encontrada"});
			}else{
				res.status(200).send({nota: resultadoBusqueda});
			}
		}
	});
}

module.exports = {
	agregarNota,
	editarNota,
	borrarNota,
	listarNotas,
	buscarNotaPorDni,
	buscarNotaPorDniYCurso,
	buscarNotaPorId,
	buscarNotaPorCurso
}
