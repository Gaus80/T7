function guardar(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawEstudiantes = JSON.stringify({
    "dni": document.getElementById("dni").value,
    "nombre": document.getElementById("nombre").value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawEstudiantes,
    redirect: "follow"
  };

  fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

function cargar(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){

    //RESETEAR ELEMENTO
    elemento = "";

      elemento = elemento + "<br>Documento de identidad: " + transformado[vc].numerodedocumentodelestudiante;
      elemento = elemento + "<br>Nombres: " + transformado[vc].nombrescompletosdelestudiante;
      salida += elemento + "<br><br>";
  }
  document.getElementById("rta").innerHTML = salida;
}

function listar(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargar(result))
    .catch((error) =>
      console.error(error));

}

function respuesta_actualizar(resultado){
  document.getElementById("rta").innerHTML = resultado;
}

function actualizar(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({  
    "nombre": document.getElementById("nombre").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let dni = document.getElementById("dni").value;
  fetch(`http://localhost:8888/.netlify/functions/estudiantes/${dni}`, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
          respuesta_actualizar(result))
    .catch((error) =>
          console.error(error));
}

function cargarLE(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>Documento de identidad: " + transformado.numerodedocumentodelestudiante;
  elemento = elemento + "<br>Nombres: " + transformado.nombrescompletosdelestudiante;
  salida += elemento + "<br><br>";
  document.getElementById("rta").innerHTML = salida;
}

function listar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let dni = document.getElementById("dni").value;
  fetch(`http://localhost:8888/.netlify/functions/estudiantes/${dni}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarLE(result))
    .catch((error) =>
      console.error(error));
}

function cargarEE(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rta").innerHTML = transformado.respuesta;
}

function eliminar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let dni = document.getElementById("dni").value;
  fetch(`http://localhost:8888/.netlify/functions/estudiantes/${dni}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEE(result))
    .catch((error) =>
      console.error(error));
}


//METODOS PARA CURSOS

//GUARDAR
function guardarCurso(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawCursos = JSON.stringify({
    "codigoCurso": document.getElementById("codigoCurso").value,
    "nombreCurso": document.getElementById("nombreCurso").value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawCursos,
    redirect: "follow"
  };

  fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
    
}

//LISTAR
function cargarCurso(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){

    //RESETEAR ELEMENTO
    elemento = "";

      elemento += "<br>Codigo Curso: " + transformado[vc].codigodelcurso;
      elemento += "<br>Nombre del Curso: " + transformado[vc].nombredelcurso;
      salida += elemento + "<br><br>";
  }
  document.getElementById("curso-rta").innerHTML = salida;
}

function listarCurso(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarCurso(result))
    .catch((error) =>
      console.error(error));

}


//ACTUALIZAR

function respuesta_actualizarCursos(resultado){
  document.getElementById("curso-rta").innerHTML = resultado;
}

function actualizarCursos(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({  
    "nombreCurso": document.getElementById("nombreCurso").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let codigo = document.getElementById("codigoCurso").value;
  fetch(`http://localhost:8888/.netlify/functions/cursos/${codigo}`, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
          respuesta_actualizarCursos(result))
    .catch((error) =>
          console.error(error));
}

//BORRAR CURSO

function cargarCursoEliminado(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("curso-rta").innerHTML = transformado.respuesta;
}

function eliminarCurso(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let codigo = document.getElementById("codigoCurso").value;
  fetch(`http://localhost:8888/.netlify/functions/cursos/${codigo}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarCursoEliminado(result))
    .catch((error) =>
      console.error(error));
}

//BUSCAR UNICAMENTE ESE ESTUDIANTE
// Buscar un curso específico
function cargarLECursos(resultado) {
  let transformado = JSON.parse(resultado);
  let salida = "";
  let elemento = "";
  
  if (transformado) {
    elemento += "<br>Codigo del curso: " + transformado.codigodelcurso;
    elemento += "<br>Nombre del curso: " + transformado.nombredelcurso;
    salida += elemento + "<br><br>";
  } else {
    salida = "No se encontró el curso con ese código.";
  }
  
  document.getElementById("curso-rta").innerHTML = salida;
}

function listar_curso(event) {
  event.preventDefault();
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let codigoCurso = document.getElementById("codigoCurso").value; // Obtén el código ingresado
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  // Cambiar la URL para incluir el código del curso correctamente en la ruta
  fetch(`http://localhost:8888/.netlify/functions/cursos/${codigoCurso}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener el curso');
      }
      return response.text();
    })
    .then((result) => cargarLECursos(result)) 
    .catch((error) => {
      console.error(error);
      document.getElementById("curso-rta").innerHTML = "Error: " + error.message;
    });
}




//----------------------------------------------------------------------------------------------------------------
//GUARDAR SESIONES

function guardarSesiones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawCursos = JSON.stringify({
    "sesionesCurso": document.getElementById("sesionesCurso").value,
    "fecha": document.getElementById("fecha").value,
    "horaInicio": document.getElementById("horaInicio").value,
    "horaFinal": document.getElementById("horaFinal").value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawCursos,
    redirect: "follow"
  };

  fetch("http://localhost:8888/.netlify/functions/sesiones", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
// LISTAR SESIONES
function cargarSesion(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){

    //RESETEAR ELEMENTO
    elemento = "";

      elemento += "<br>Codigo Curso: " + transformado[vc].codigodelcurso;
      elemento += "<br>Nombre del Curso: " + transformado[vc].fecha;
      elemento += "<br>Nombre del Curso: " + transformado[vc].horadeinicio;
      elemento += "<br>Nombre del Curso: " + transformado[vc].horafinal;
      salida += elemento + "<br><br>";
  }
  document.getElementById("sesion-rta").innerHTML = salida;
}

function listarSesion(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/sesiones", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarSesion(result))
    .catch((error) =>
      console.error(error));

}

//ACTUALIZAR SESIONES

function respuestaSesion(resultado){
  document.getElementById("sesion-rta").innerHTML = resultado;
}


function actualizarSesion(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({   
    "fecha": document.getElementById("fecha").value,
    "horaInicio": document.getElementById("horaInicio").value,
    "horaFinal": document.getElementById("horaFinal").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let cod = document.getElementById("sesionesCurso").value;
  fetch(`http://localhost:8888/.netlify/functions/sesiones/${cod}`, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
          respuestaSesion(result))
    .catch((error) =>
          console.error(error));
}



//ELIMINAR SESION

function cargarSesionEliminada(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("sesion-rta").innerHTML = transformado.respuesta;
}

function eliminarSesion(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let codigo = document.getElementById("sesionesCurso").value;
  fetch(`http://localhost:8888/.netlify/functions/sesiones/${codigo}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarSesionEliminada(result))
    .catch((error) =>
      console.error(error));
}


///LISTAR UNA SOLA SESION

function cargarUnicaSesion(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>Codigo del Curso: " + transformado.codigodelcurso;
  elemento = elemento + "<br>Fecha: " + transformado.fecha;
  elemento = elemento + "<br>Hora de inicio: " + transformado.horadeinicio;
  elemento = elemento + "<br>Fecha: " + transformado.horafinal;
  salida += elemento + "<br><br>";
  document.getElementById("sesion-rta").innerHTML = salida;
}


function listarUnicaSesion(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let cod = document.getElementById("sesionesCurso").value;
  fetch(`http://localhost:8888/.netlify/functions/sesiones/${cod}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarUnicaSesion(result))
    .catch((error) =>
      console.error(error));
}

