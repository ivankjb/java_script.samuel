var lista = [1, 2, 4, 3, 4, 3, 5, 4, 6, 8, 9]
var tamaño = 0;
var moda = [0]

for (let i = 0; i < lista.length; i++) {
    let contador = 0
    for (let a = 0; a < lista.length; a++) {
        if (lista[i] - lista[a] == 0) {
            contador += 1
        }
    }
    if (contador > tamaño) {
        tamaño = contador;
        moda.pop()
        moda.push(lista[i])

    }
}

console.log(`la moda de la lista es: ${moda}`)