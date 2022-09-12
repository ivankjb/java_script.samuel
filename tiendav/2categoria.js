
const producto = require('./producto');
class categoria {
    _listaproductos=[]
    constructor(nombre) {
        this._nombre=nombre
    }
    get listaproductos(){
        return this._listaproductos
    }

    get nombre(){
        return this._nombre
    }
    composicion(codigo,nombre, precio){
        let com=new producto(codigo,nombre, precio)
        this._listaproductos.push(com)

    }


    buscarprecio(producto){
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                return a.precio
            }
        } 
    }
       /* Retornara el nombre del producto  */ 
    buscarnombreprod(producto){
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                return a.nombre
            }
        }
    }
    /* Retornara el Objeto, es decir, mostrara la composicion del producto  */ 
    buscarproducto(producto){
        var respuesta 
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                respuesta = a
            }
        }
        return respuesta
    }

}

/*Se usa para exportar la clase */
module.exports =categoria;





