/* Se crea una clase producto con los atributos correspondientes*/ 

class producto {
    _codigo
    _nombre
    _precio_unitario
    constructor(codigo, nombre, precio) {
        this._codigo = codigo
        this._nombre = nombre;
        this._precio_unitario = precio;
    }
    get producto() {
        /*Se creara una variable llamada datosp en donde se retornara los datos que esten guardados dentro del objeto*/
        let datosp = `Codigo producto: ${this._codigo} Producto: ${this._nombre} Precio unitario: ${this._precio_unitario}`
        return datosp
    }
    get codigo() {
        return this._codigo
    }
    get nombre() {
        return this._nombre
    }
    get precio() {
        return this._precio_unitario
    }
    set precio (precio){
        this._precio=precio
    }
}

/*Se usa para exportar la clase */
module.exports = producto