var numero1 = Math.round(Math.random()*20);
console.log(numero1)
var numero2 = Math.round(Math.random()*20);
console.log(numero2)
var numero3 = Math.round(Math.random()*20);
console.log(numero3)

if (numero2 > numero1 == numero2 < numero3) {
  console.log(numero2);
} else if (numero1 > numero2 == numero1 < numero3) {
  console.log(numero1);
  }  else {
    console.log(numero3);
 }
