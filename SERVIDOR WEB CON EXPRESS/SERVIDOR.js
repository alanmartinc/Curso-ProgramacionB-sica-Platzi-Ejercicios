var cafecito = require("express");
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
  resultado.send("Este es el <strong> home </strong>");
}

function cursos(peticion, resultado) {
  resultado.send("Estos son los <strong> cursos </strong>");
}

aplicacion.listen(8989);
