var respuesta1= Math.floor(Math.random()*2);
var respuesta2= Math.floor(Math.random()*2);
var respuesta3= Math.floor(Math.random()*2);

var pregunta1 = '¿colon descubrio america ?';
var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
var pregunta3 = '¿the doors fue un grupo de rock americano?';

console.log(pregunta1)

if (respuesta1 == 1) {
  console.log ('respuesta : si')  
  console.log(pregunta2);
  if (respuesta2 == 1) {
    console.log ('respuesta : si')  
  console.log(pregunta3)
  if (respuesta3==2){
    console.log ('respuesta : no')  
  console.log('ganaste')
  }else {
    console.log ('respuesta : si')  
    console.log('a salido del juego')
    
}
 } else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}
} else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}