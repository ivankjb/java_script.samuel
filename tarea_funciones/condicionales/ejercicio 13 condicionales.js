var num = Math.round(Math.random()*10000000)
console.log('la cantidad de milisegundos es',num)

if (num >=0) {
  var horas =Math.trunc(num / 3600000)
  num = num%3600 } else {
    horas= 0
  }
  if (num !=0) { 
    var min = Math.trunc (num/60000)
    num = num%60000

  } else {
    horas=0
  }
  if (num !=0) {
    var seg = Math.trunc (num / 1000) 
    num = num%1000
  } else {
    min=0
  } 
  console.log(horas,':',min,':',seg)

//
var num = Math.round(Math.random()*10000000)
console.log('la cantidad de segundos es',num)

if (num >=0) {
  var horas =Math.trunc(num / 36000)
  num = num%3600 } else {
    horas= 0
  }
  if (num !=0) { 
    var min = Math.trunc (num/60)
    num = num%60

  } else {
    horas=0
  }
  if (num !=0) {
      var seg =num
  } else {
    min=0
  } 
  console.log(horas,':',min,':',seg)
