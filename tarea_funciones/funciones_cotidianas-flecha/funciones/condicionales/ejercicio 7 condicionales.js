var max=80;
var min=40;
var horas = Math.round(Math.random()*(max-min)+min)
console.log(horas)

var cuesta = 40 * 2600
if (horas ==40) {
  console.log('su sueldo es de ',+cuesta)
} else if (horas > 40) {
  var extra = horas - 40
  extra = (extra * 5000) + cuesta
  console.log('su sueldo es de  ',extra)
}
