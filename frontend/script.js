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

//GUARDAR SESIONES

function guardarSesiones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawCursos = JSON.stringify({
    "sesionesCurso": document.getElementById("sesionesCurso").value,
    "fecha": document.getElementById("fecha").value,
    "horaInicio": document.getElementById("horaInicio"),
    "horaFinal": document.getElementById("horaFinal"),
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
// CONSULTAR CURSOS

function cargarCurso(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){

    //RESETEAR ELEMENTO
    elemento = "";

      elemento = elemento + "<br>Codigo Curso: " + transformado[vc].codigodelcurso;
      elemento = elemento + "<br>Nombre del Curso: " + transformado[vc].nombredelcurso;
      salida += elemento + "<br><br>";
  }
  document.getElementById("rta-curso").innerHTML = salida;
}

function listarCurso(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/sesiones", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargar(result))
    .catch((error) =>
      console.error(error));

}