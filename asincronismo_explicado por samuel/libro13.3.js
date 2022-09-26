function resolver() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolver');
        }, 5000);
    });
}

async function llamar() {
    console.log('llamar funcion');
    const result = await resolver(); // resolver despues de dos segundos
    console.log(result);
    // expected output: "resolved"
}
llamar();


try {

} catch (error) {

}

/*....................................................................................*/
function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('ADSI ' + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);



/*
1. Cree un valor global para un contador.
2. Cree una función que tome un argumento. Devolver el resultado de una nueva
Promesa, establecer una función setTimeout() que contendrá la resolución
instancia.
3. Incremente el contador dentro de setTimeout(), agregando uno cada segundo.
Resolver la Promesa con el valor de la ficha y el valor de la
variable que estaba en el argumento de la función.
4. Cree una función asíncrona que envíe a la consola el valor de
el contador global y el valor del argumento de la función.
5. Cree una variable para capturar el valor de resolución devuelto de la espera
función. Envíe ese resultado a la consola.
6. Cree un ciclo para iterar 10 veces, incrementando el valor e invocando el





//let cnt2 = 0
función asíncrona, pasando el valor de la variable de incremento como parámetro
en la función.

*/
//Practice exercise 13.3


let contador = 0;

function salida_tiempo(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            contador++;
            resolve(`valor x ${val} contador:${contador}`);
        }, 2000);
    });
}
async function aCall(val) {
    const res = await salida_tiempo(val)
    return new Promise(() => {
        contador++;
        `valor x ${val} contador:${contador}`, res
    })
}






async function repeticion(valor) {
    const array = await aCall(valor)
    for (let i = 0; i < 10; i++) {

    }

}

repeticion(3)
    // function outputTime(val) {
    //     setTimeout(() => {
    //         cnt2++;
    //         console.log(`valor x ${val} contador:${cnt2}`);
    //     }, 1000);
    // }
    // outputTime()