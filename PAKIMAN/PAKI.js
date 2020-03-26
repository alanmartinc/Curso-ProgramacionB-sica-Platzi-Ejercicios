var imagenes = [];
imagenes["Cauchin"] = "VACA.png";
imagenes["Pokacho"] = "POLLO.png";
imagenes["Tocinauro"] = "CERDO.png";

var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var freddito of coleccion)
{
  freddito.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
