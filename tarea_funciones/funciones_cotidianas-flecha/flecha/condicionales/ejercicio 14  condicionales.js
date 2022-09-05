var grados = Math.round(Math.random()*360)
console.log('los grados son ',+grados) 
var pin = 3.1416
if (grados <=90) {
  var radianes = (grados * pin )/180
  console.log('se encuentra el primer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=180) {
  console.log ('se encuentra el segundo cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <= 270) {
  console.log('se encuentra el tercer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=360) {
  console.log('se encuentra el cuarto cuadrante, sus grados convertidos en radianes es de ',radianes)
}