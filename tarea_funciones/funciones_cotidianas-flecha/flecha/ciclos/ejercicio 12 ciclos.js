/*EJERCICIO 12 */

var n =Math.round(Math.random()* 100);
for (let i =0; i <= n ; i ++){
    let resultado ='';

    for(let j =1; j <=i; ++j){
        resultado +='*';
    }
    console.log(resultado);
}

