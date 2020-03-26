var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

/* while (l < lineas) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("blue", 0, yi, xf, 300);
  l = l + 2;
} */

for (l=0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("blue", 0, yi, xf, 300);
  console.log("Linea " + l);
}

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 299);
dibujarLinea("black", 299, 299, 299, 1);
dibujarLinea("black", 299, 1, 1, 1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
