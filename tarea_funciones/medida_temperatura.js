function fahrenheit(C) {
    let f = (C * 9 / 5) + 32
    return `la temperatura en fahrenheit es: ${f}°F`
}

function kelvin(C) {
    let k = (C + 273.15)
    return `la temperatura en Kelvin es: ${k}°K`
}

function rankine(C) {
    let r = C * 9 / 5 + 491.67
    return `la temperatura en rankine es: ${r}°R`
}

var C = Math.round(Math.random() * 100)
console.log('la temperatura generada es: ', C, '°C\n', fahrenheit(C), '\n', kelvin(C), '\n', rankine(C))