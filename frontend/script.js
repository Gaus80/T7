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
  elemento = "ID: " + transformado.id;
  elemento = elemento + "<br>Documento de identidad: " + transformado.dni;
  elemento = elemento + "<br>Nombres: " + transformado.nombre;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaLE").innerHTML = salida;
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
  let elid = document.getElementById("idLE").value;
  fetch("http://localhost:8888/.netlify/functions/estudiantes"+elid, requestOptions)
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
