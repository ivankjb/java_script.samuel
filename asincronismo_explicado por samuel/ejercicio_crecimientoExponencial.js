var n = Math.round(Math.random()*(10000-1000)+1000);

function poblacion_tiempo(n) {
    console.log(`poblacion inicial: ${n}`)
    for(let t=1;t<=10;t++){
        var p = n
        var nacimientos =  Math.round(Math.random()*(p*(10/100)))
        var muertes =  Math.round(Math.random()*(p *(3/100)))
        var r = (nacimientos - muertes)/n 
        p = n*(1+r)^t
        console.log(`========== ==========   ========== ==========`)
        console.log(`año: ${t}\n la poblacion es: ${p}\n los nacimientos de esta poblacion fueron: ${nacimientos}\n las muertes de esta poblacion fueron: ${muertes}`)
        console.log(`========== ==========   ========== ==========`)
    }
    casas(p)
    valor_neto(n,p)
}

function casas(valor) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let porcentaje = 0.1 / 1
            console.log(`la cantidad de personas que recibira casa sera: ${valor * porcentaje}`)
            resolve()            
        }, 5000);

    })
}

function valor_neto(i,f) {
    return new Promise((resolve, reject) => { 
        let porcentaje = (f*100)/i
        console.log(`el crecimiento neto en la poblacion fue del: ${porcentaje - 100} %`)
        resolve()
    })
    
}

poblacion_tiempo(n)

/* realizar dos promesas con base en el ejercicio
    al 10% de la poblacion final le entrego una casa, calcular la cantidad a la que se le da casa dentro de settimeout 5 seg despues del ejercicio
    Calcular el crecimiento neto de los diez productos teniendo en cuenta el crecimiento neto */
