var dividendo = 24
var divisor = 18
var x = [];
var residuo = dividendo % divisor
while (residuo != 0) {
    x.push(residuo);
    dividendo = divisor
    divisor = residuo
    residuo = dividendo % divisor

}
console.log(x[x.length - 1]);