var lista = [5, 6, 6, 7, 8]

//////////// //////// funcion ^^^^^^ clasica //////// ////////////

function desviacion(array) {
    function promedio(array) {
        let media = 0;
        for (let a = 0; a < array.length; a++) {
            media = media + array[a];
        }
        media = media / array.length;
        return media
    }

    let X = promedio(array);
    let sum = 0;
    for (let a = 0; a < array.length; a++) {
        sum += (array[a] - X) ** 2
    }
    sum = sum / array.length
    console.log(`la desviacion estandar de los datos es: ${sum ** 0.5}`)

}

//////////// //////// funcion en flecha //////// ////////////
const desviacion_f = (array) => {
    function promedio(array) {
        let media = 0;
        for (let a = 0; a < array.length; a++) {
            media = media + array[a];
        }
        media = media / array.length;
        return media
    }

    let X = promedio(array);
    let sum = 0;
    for (let a = 0; a < array.length; a++) {
        sum += (array[a] - X) ** 2
    }
    sum = sum / array.length
    console.log(`la desviacion estandar de los datos es: ${sum ** 0.5}`)

}


desviacion(lista)