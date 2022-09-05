function Preguntas3(){
let respuesta1= Math.floor(Math.random()*2);
let respuesta2= Math.floor(Math.random()*2);
let respuesta3= Math.floor(Math.random()*2);

let pregunta1 = '¿colon descubrio america ?';
let pregunta2 = '¿la independecia de colombia fue en el año 1810?';
let pregunta3 = '¿the doors fue un grupo de rock americano?';

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
}

Preguntas3();


// Funcion Flecha 

const Preguntas3_1=()=>{
  let respuesta1= Math.floor(Math.random()*2);
let respuesta2= Math.floor(Math.random()*2);
let respuesta3= Math.floor(Math.random()*2);

let pregunta1 = '¿colon descubrio america ?';
let pregunta2 = '¿la independecia de colombia fue en el año 1810?';
let pregunta3 = '¿the doors fue un grupo de rock americano?';

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
}
Preguntas3_1();
