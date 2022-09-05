var num = 1000
var d = 10;
var c;
var al = [];


do {
    c = Math.trunc(num / d);
    d = d * 10;
} while (c > 10);


do {
    c = Math.trunc(num / d);
    al.push(c)
    num = num % d;
    d = d / 10

} while (num != 0);

var i = al.length;
var rev = [];

for (i; i >= 0; i--) {
    rev.push(al[i])
}
console.log(rev.join(''));