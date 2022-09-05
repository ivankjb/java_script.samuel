var valor1 = Math.round(Math.random()*5)
console.log(valor1)
var valor2 = Math.round(Math.random()*5)
console.log(valor2)
var valor3 = Math.round(Math.random()*10)
console.log(valor3) 

if (valor1==valor2 && valor1 == valor3) {
  console.log('los tres valores son iguales')
} else if (valor1 !=valor2 && valor1 == valor3) {
  console.log('dos valores son iguales')
} else if (valor1 !=valor2 && valor1 !=valor3) {
  console.log('los tres valores son distintos')
} 
 else if (valor2 == valor1 && valor2 != valor3) {
  console.log('hay dos valores son iguales')
}else if (valor3 == valor2 && valor3 != valor1) {
  console.log('hay dos valores iguales')
}
