function externa() {
    console.log('funcion externa del setTimeOut')
};

const funcionExt=()=>{
    console.log('Funcion externa flecha')
}

setTimeout(()=>{
    console.log('yo amo el Soacha')
},2000)

setTimeout(function(){
    console.log('funcion clasica')
},3000)

setTimeout(externa,5000);
setTimeout(funcionExt, 6000);

setInterval(() => {
    console.log('se repite')
}, 3000);

let timerId = setInterval(() => console.log('Amo el SENA'), 2000);

//DESPUES DE 5 SEGUNDOS PARAR
setTimeout(()=>{
    clearInterval(timerId);
    //con0sole.log('stop');
}, 7000)
// escriba un programa que muestre un programa que muestre un contador desde 1 hasta 10 donde cada numero se muestre cada 2 segundos



