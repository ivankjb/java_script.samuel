function receptora(cb1,cb2,parametro){
    cb1();
    setTimeout(() => {
        console.log('Dentro de la funcion receptor')
    }, 0);
    cb2(parametro)
}

function funcionArgumento(parametro) {
    console.log(`${parametro} de la función argumento`)
}

// se hace el llamdo de la funcion receptora que recibe dos funciones ('la funcion flecha' y 'la funcionArgumento') y un argumento (100)
receptora(()=>console.log('Funcion anonima'), funcionArgumento, 100)


