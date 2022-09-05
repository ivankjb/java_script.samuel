var num;
var al;
var list = [];
var d;
var n;
var c;

for (num = 100; num <= 1000; num++) {
    al = 0;
    d = 100;
    n = num
    c = 0;
    do {
        c = Math.trunc(n / d);
        al += c ** 3
        n = n % d;
        d = d / 10


    } while (d != 0);
    if (al == num) {
        list.push(num);
    }
}
console.log('estos son los numeros cuya suma de los cubos de sus digitos equivale a su mismo numero: \n', list)