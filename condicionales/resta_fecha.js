var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);
 
var today = new Date();
 
var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
 

var now = today.toLocaleString('en-US', options);
console.log(now);
 
/*
    Resultado: Monday, January 27, 2020, UTC
*/
var arreglo = "perro,gato,tucán".split(",");
//Salida => ["perro", "gato", "tucán"]
console.log(arreglo)