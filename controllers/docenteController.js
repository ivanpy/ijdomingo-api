'use stritc'

var Docente = require('../models/docente');


function agregarDocente (req, res){
	var parametros = req.body;
	var docente = new Docente();
	docente.nombre = parametros.nombre;
	docente.apellido = parametros.apellido;
	docente.nacionalidad = parametros.nacionalidad;
	docente.fecnac = parametros.fecnac;
	docente.dni = parametros.dni;
	docente.sexo = parametros.sexo;
	docente.email = parametros.email;
	docente.fijo = parametros.fijo;
	docente.celular = parametros.celular;
	docente.provincia = parametros.provincia;
	docente.localidad = parametros.localidad;
	docente.domicilio = parametros.domicilio;
	docente.barrio = parametros.barrio;
	docente.ocupacion = parametros.ocupacion;
	docente.save((err, docenteGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar el docente"});
		}else{
			res.status(200).send({message: "docente guardado", docente: docenteGuardado});
		}
	});
}

function editarDocente (req, res){
	var id = req.params.id;
	var parametros = req.body;
	Docente.findByIdAndUpdate(id, parametros, (err, docenteEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar docente", docenteId: id});
		}else{
			res.status(200).send({message: "Exito al editar docente", docente: docenteEditado});
		}
	});
}

function borrarDocente (req, res){
	var id = req.params.id;
	Docente.findById(id, (err, docenteABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el docente", docenteId: id});
		}
		if(!docenteABorrar){
			res.status(404).send({message: "Docente no encontrado"});
		}else{
			docenteABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar el docente", docenteId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", docente: docenteABorrar});
				}
			});
		}
	});

}

function listarDocentes (req, res){
	Docente.find({}).sort('apellido').exec((err, listDocentes) => {
		if(err){
			res.status(500).send({message: "Error al listar docentes"});
		}else{
			if(!listDocentes){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({docentes: listDocentes});
			}
		}
	});
}

function buscarDocentePorDni (req, res){
	var dni = req.params.dni;
	Docente.find({dni: dni}).exec((err, doncenteDni) => {
		if(err){
			res.status(500).send({message: "Error al buscar el docente"});
		}else{
			if(!doncenteDni){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({doncenteDni: doncenteDni});
			}
		}
	});
}

function buscarDocentePorId (req, res){
	var id = req.params.id;
	Docente.findById(id, (err, docenteEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el docente", docenteId: id});
		}else{
			if(!docenteEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({docente: docenteEncontrado});
			}
		}
	});
}

module.exports = {
	agregarDocente,
	editarDocente,
	borrarDocente,
	listarDocentes,
	buscarDocentePorDni,
	buscarDocentePorId
}
