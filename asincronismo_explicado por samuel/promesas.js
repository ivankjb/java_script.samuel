function base() {
    return new Promise((resolve, reject)=>{
        
       if (true){
        resolve();
        setTimeout(() => {
            console.log('linea de código dentro de la función promesa')
        }, 500);
       }else{
            reject()
       }
    })
    
}

base()
    .then(()=>{
        console.log('En el then')
        return 'estoy viajando entre then'
    })
    .then((dato) => {
        console.log(dato)
    })
    .then(auxiliar)

function auxiliar() {
    console.log('Funcion Auxiliar')
}



