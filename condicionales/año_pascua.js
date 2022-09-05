function pascua(y) {
    let a, b, c, d, e, n
    a = y % 19;
    b = y %4
    c = y % 7
    d = (19*a+24) % 30
    e = (2*b+4*c+6*d+5) % 7
    n = (22+d+e)
    if (n>31){
        n -= 31
        console.log(`el domingo de pascua en el año ${y} es el ${n} de abril`)
    }
}
pascua(2020)