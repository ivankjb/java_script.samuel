function funcionGeneral(cb1,cb2,cadena) {
    let array_cadena = cadena.split('');

    console.log(cb1(array_cadena), cb2(array_cadena))

    console.log(`la palabra en mayuscula es: ${cadena.toUpperCase()}`)
    console.log(`la palabra en minuscula es: ${cadena.toLowerCase()}`)
}

function contar_may(array) {
    let may = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let contador = 0
    for(let i = 0; i < array.length; i++){
        for(let e = 0; e < may.length; e++){
            if(array[i] === may[e]){
                contador +=1;
            }
        }
    }
    return `El numero de mayusculas es: ${contador}`
}

function contar_min(array) {
    let min = ['a','b','c','d','e','f','g','h','i','j','k','l','m','ñ','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let contador = 0
    for(let i = 0; i < array.length; i++){
        for(let e = 0; e < min.length; e++){
            if(array[i] === min[e]){
                contador +=1;
            }
        }
    }
    return `El numero de minusculas es: ${contador}`
}



funcionGeneral(contar_may,contar_min,'ConShuelito')


