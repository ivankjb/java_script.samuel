var num = 0 
var num = Math.round(Math.random()*9999)
console.log(num)
function cifras(num){
  if (num < 10 ) {
    console.log('Tiene una cifra :',num)
  } else if (num < 100) {
    console.log('Tiene dos cifras :',num)
  } else if (num < 1000) {
    console.log ('Tiene tres cifras :',num)
  } else if (num < 10000) {
    console.log ('Tiene cuatro cifras :',num)
  }else {
    console.log('fuera de rango')
  }
}

const cifras2 = (num)=>{
  if (num < 10 ) {
    console.log('Tiene una cifra :',num)
  } else if (num < 100) {
    console.log('Tiene dos cifras :',num)
  } else if (num < 1000) {
    console.log ('Tiene tres cifras :',num)
  } else if (num < 10000) {
    console.log ('Tiene cuatro cifras :',num)
  }else {
    console.log('fuera de rango')
  }
} 