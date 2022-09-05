var a = Math.round(Math.random() * (50 + 50) - 50)
var b = Math.round(Math.random() * (50 + 50) - 50)
var c = Math.round(Math.random() * (50 + 50) - 50)
var x1, x2

function raiz(a, b, c) {
    let raiz
    let num = b ** 2 - (4 * (a * c))
    if (num < 0) {
        num = num * -1
    }
    raiz = Math.sqrt(num)
    return raiz;
}

function prob(x) {
    let P = false
    if ((a * (x ** 2)) + (b * x) + c == 0) {
        P = true
    }
    return P;
}

function cuadratica(a, b, c) {
    console.log(`${a}x^2 + ${b}x + ${c}`)
    x1 = ((-1 * b) + raiz(a, b, c)) / 2 * a
    x2 = ((-1 * b) + raiz(a, b, c)) / 2 * a
    console.log(`x vale: |${x1}| |${x2}|`)
}

cuadratica(a, b, c)