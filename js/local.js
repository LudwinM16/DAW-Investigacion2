var aNombre = [],
	aCorreo = [],
	aLista = [],
	aEspecialidad = [];


if(localStorage.getItem('nombre_alumno') != null){
	aNombre = JSON.parse(localStorage.getItem('nombre_alumno'));
	aCorreo = JSON.parse(localStorage.getItem('correo_alumno'));
	aLista = JSON.parse(localStorage.getItem('lista_alumno'));
	aEspecialidad = JSON.parse(localStorage.getItem('especialidad_alumno'));
}


var btndeRegistro = document.getElementById("btnAgregar"); 

btndeRegistro.addEventListener('click', registrarAlumno);

function registrarAlumno(){
	var sNombre = document.querySelector('#nombre').value,
	sCorreo = document.querySelector('#correo').value,
	sLista = document.querySelector('#lista').value,
	sEspecialidad = document.querySelector('#especialidad').value;

	aNombre.push(sNombre);
	aCorreo.push(sCorreo);
	aLista.push(sLista);
	aEspecialidad.push(sEspecialidad);

	localStorage.setItem('nombre_alumno', JSON.stringify(aNombre));
	localStorage.setItem('correo_alumno',JSON.stringify(aCorreo));
	localStorage.setItem('lista_alumno',JSON.stringify(aLista));
	localStorage.setItem('especialidad_alumno', JSON.stringify(aEspecialidad));

	location.reload();
}

llenarTabla();


function llenarTabla(){
	var tbody = document.querySelector('#tblAlumnos tbody');

	tbody.innerHTML = '';

	var aNombre = JSON.parse(localStorage.getItem('nombre_alumno')),
		aCorreo = JSON.parse(localStorage.getItem('correo_alumno')),
		aLista = JSON.parse(localStorage.getItem('lista_alumno')),
		aEspecialidad = JSON.parse(localStorage.getItem('especialidad_alumno'));

	var cantAlumnos = aNombre.length;

	for(var i = 0; i < cantAlumnos; i++){
		var fila = document.createElement('tr');

		var celdaNombre = document.createElement('td'),
		celdaCorreo = document.createElement('td'),
		celdaLista = document.createElement('td'),
		celdaEspecialidad = document.createElement('td');

		var nodoTextoNombre = document.createTextNode(aNombre[i]),
		nodoTextoCorreo = document.createTextNode(aCorreo[i]),
		nodoTextoLista = document.createTextNode(aLista[i]),
		nodoTextoEspecialidad = document.createTextNode(aEspecialidad[i]);

		celdaNombre.appendChild(nodoTextoNombre);
		celdaCorreo.appendChild(nodoTextoCorreo);
		celdaLista.appendChild(nodoTextoLista);
		celdaEspecialidad.appendChild(nodoTextoEspecialidad);

		fila.appendChild(celdaNombre);
		fila.appendChild(celdaCorreo);
		fila.appendChild(celdaLista);
		fila.appendChild(celdaEspecialidad);
tbody.appendChild(fila);

	}
}