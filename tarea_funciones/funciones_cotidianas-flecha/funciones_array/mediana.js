var lista = [2, 3, 5, 3, 2, 1, 2, 50]
var menor = []
for (let i = 0; i < lista.length; i++){
    for (let a = 0; a < lista.length; a++) {
        var num = lista[a]
        let contador = 0
        for (let e = 0; e < lista.length; e++) {
    
            if ((lista[e]) - num < 0) {
                contador += 1
            }
    
        }
        if (contador == i) {
            menor.push(num)
        }
        
    }
}
if(menor.length%2 == 0){
    min= menor.length/2
}