// se implementa el sistema con el limite de 46 a que este numero representa una muy buena imagen en la consola
var num = Math.round(Math.random() * (46 + 46) - 46);
var list = [];
var cadena = '';

console.log('el numero es igual a: ', num)
if (num > 0) {
    for (var i = 1; i <= num; i++) {
        cadena = cadena + ' ' + String(i);
        list.push(cadena)
    }
} else {
    console.log('numero negativo no funciona')
}

for (num -= 1; num >= 0; num--) {
    console.log(list[num])
}