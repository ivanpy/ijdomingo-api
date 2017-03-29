'use stritc'

var Alumno = require('../models/alumno');


function agregarAlumno (req, res){
	var parametros = req.body;
	var alumno = new Alumno();
	alumno.nombre = parametros.nombre;
	alumno.apellido = parametros.apellido;
	alumno.nacionalidad = parametros.nacionalidad;
	alumno.fecnac = parametros.fecnac;
	alumno.dni = parametros.dni;
	alumno.sexo = parametros.sexo;
	alumno.email = parametros.email;
	alumno.fijo = parametros.fijo;
	alumno.celular = parametros.celular;
	alumno.provincia = parametros.provincia;
	alumno.localidad = parametros.localidad;
	alumno.ocupacion = parametros.ocupacion;
	alumno.save((err, alumnoGuardado) => {
		if(err){
			res.status(500).send({message: "Error al guardar el alumno"});
		}else{
			res.status(200).send({message: "alumno guardado", alumno: alumnoGuardado});
		}
	});
}

function editarAlumno (req, res){
	var id = req.params.id;
	var parametros = req.body;
	Alumno.findByIdAndUpdate(id, parametros, (err, alumnoEditado) => {
		if(err){
			res.status(500).send({message: "Error al editar alumno", alumnoId: id});
		}else{
			res.status(200).send({message: "Exito al editar alumno", alumno: alumnoEditado});
		}
	});
}

function borrarAlumno (req, res){
	var id = req.params.id;
	Alumno.findById(id, (err, alumnoABorrar) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el alumno", alumnoId: id});
		}
		if(!alumnoABorrar){
			res.status(404).send({message: "Alumno no encontrado"});
		}else{
			alumnoABorrar.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar el alumno", alumnoId: id});
				}else{
					res.status(200).send({message: "Exito al borrar", alumno: alumnoABorrar});
				}
			});
		}
	});

}

function listarAlumnos (req, res){
	Alumno.find({}).sort('apellido').exec((err, listAlumnos) => {
		if(err){
			res.status(500).send({message: "Error al listar alumnos"});
		}else{
			if(!listAlumnos){
				res.status(404).send({message: "Lista vacia"});
			}else{
				res.status(200).send({alumnos: listAlumnos});
			}
		}
	});
}

function buscarAlumnoPorDni (req, res){

}

function buscarAlumnoPorId (req, res){
	var id = req.params.id;
	Alumno.findById(id, (err, alumnoEncontrado) => {
		if(err){
			res.status(500).send({message: "Error al encontrar el alumno", alumnoId: id});
		}else{
			if(!alumnoEncontrado){
				res.status(404).send({message: "No encontrado"});
			}else{
				res.status(200).send({alumno: alumnoEncontrado});
			}
		}
	});
}

module.exports = {
	agregarAlumno,
	editarAlumno,
	borrarAlumno,
	listarAlumnos,
	buscarAlumnoPorDni,
	buscarAlumnoPorId
}
