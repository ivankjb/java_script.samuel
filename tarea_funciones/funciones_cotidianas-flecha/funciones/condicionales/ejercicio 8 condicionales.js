var min = Math.round(Math.random()*8)
console.log(min)

var cuesta = 200;
if (min <=3) {
  console.log('el costo de la llamada es de ',+cuesta)
} else if (min > 3) {
  var minu = min-3
  minu = (minu * 50) + 200
  console.log('el costo de la llamada es de ',minu)
}