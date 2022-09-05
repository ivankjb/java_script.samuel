var suma = 1;
var x = 2
var contador = 0;
var num = Math.round(Math.random() * 100);
console.log(num)
while (num > suma) {
    suma += x;
    console.log(suma, '+', x)
    x += 1;
    contador += 1
}
console.log(contador);