/* var n1 = Math.round(Math.random() * (100 + 100) - 100);
var n2 = Math.round(Math.random() * (100 + 100) - 100);
var dividendo
var divisor
var cociente = 0;
var residuo;

if (n1 > n2) {
    dividendo = n1
    divisor = n2
} else {
    dividendo = n2;
    divisor = n1;
}

console.log(dividendo, ' / ', divisor)

do {
    var multiplo;
    cociente += 1;
    multiplo = divisor * cociente;
} while (multiplo < dividendo)
residuo = dividendo - multiplo

console.log('cociente: ', cociente, '\nresiduo: ', residuo) */
var n1 = Math.round(Math.random() * (100 + 100) - 100);
var n2 = Math.round(Math.random() * (100 + 100) - 100);
var dividendo;
var divisor;
var multiplo = divisor;
var cociente = 0
var residuo

if (n1 > n2) {
    dividendo = n1
    divisor = n2
} else {
    dividendo = n2;
    divisor = n1;
}

for (multiplo; multiplo < dividendo; multiplo = multiplo + divisor) {
    cociente += 1
}

residuo = dividendo - (cociente * divisor);

console.log(dividendo, ' / ', divisor, '\ncociente: ', cociente, '\nresiduo:', residuo)