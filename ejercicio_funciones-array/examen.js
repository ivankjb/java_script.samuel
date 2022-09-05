var lista = []
var num = Math.round(Math.random() * (25 - 5) + 5);
//primera funcion
function insertar(array, cantidad) {
    for (let a = 0; a <= cantidad - 1; a++)
        array[a] = Math.round(Math.random() * 200);
    console.log(array)
    return array
}

lista = insertar(lista, num)

function media(array) {
    let media = 0;
    for (let a = 0; a < array.length; a++) {
        media = media + array[a];
    }
    media = media / array.length;
    return media

}


// segunda funcion 

function diferencias(array) {
    let diferencias = []
    console.log(`la media de los datos es: ${media(array)}`)
    for (let a = 0; a < array.length; a++) {
        diferencias[a] = array[a] - media(array);
    }
    console.log(diferencias)
    return diferencias

}

// tercera funcion

var diferencias = diferencias(lista)

function lefalta(diferencias) {
    for (let a = 0; a < diferencias.length; a++) {
        let num = diferencias[a]
        if (num < 0) {

            num = num * -1
            console.log(`al numero en la posicion ${a} le falta ${num}`)

        } else if (num == 0) {
            console.log(`al numero en la posicion ${a} no le sobra, ni le falta`)
        } else {
            console.log(`al numero en la posicion ${a} le sobra ${num}`)
        }
    }
}

lefalta(diferencias);