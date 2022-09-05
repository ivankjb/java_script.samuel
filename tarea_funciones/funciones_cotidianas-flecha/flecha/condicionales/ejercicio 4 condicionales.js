
var nota1 =0;
var nota2 =0;
var nota3 =0;
var nota4 =0;
var nota5 =0;

var nota1 = Math.round(Math.random()*10)
console.log('NOTA 1 :',+nota1)
var nota2 = Math.round(Math.random()*10)
console.log('NOTA 2 :',+nota2)
var nota3 = Math.round(Math.random()*10)
console.log('NOTA 3 :',+nota3)
var nota4 = Math.round(Math.random()*10)
console.log('NOTA 4 :',+nota4)
var nota5 = Math.round(Math.random()*10)
console.log('NOTA 5 :',+nota5)

var promedio = (nota1+nota2+nota3+nota4+nota5)/5 
 
if (promedio >=8) {
  console.log('Al haber evaluado sus nos notas su promedio   es de ',+promedio,'BIEN')
} else if (promedio < 8) {
  console.log('Al haber evaluado sus nos notas su promedio es de ',+promedio,'SUFICIENTE')
} else if (promedio <=4) {
    console.log('Al haber evaluado sus nos notas su promedio es de ',+promedio,'INSUFICIENTE')
  }

