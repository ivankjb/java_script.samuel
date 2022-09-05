class producto {
    _iva = 0.19;
    constructor(nombre, marca, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._marca = marca;
    }

    get producto() {
        return this._nombre, this._marca, this._precio;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get marca() {
        return this._marca;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set precio(precio) {
        this._precio = precio;
    }

    set marca(marca) {
        this._marca = marca;
    }

    set iva(iva) {
        this._iva = iva;
    }
    get iva(){
        return this._iva;
    }

    costo() {
        let costo;
        costo = (this._precio * this._iva) + this._precio
        console.log(`el costo del producto ${this._nombre , this._marca} es: ${costo}`)
    }

}


var arroz_diana = new producto('arroz', 'diana', 5900);
arroz_diana.marca = 'roa'
console.log(arroz_diana)
console.log(arroz_diana.iva)
arroz_diana.costo()
arroz_diana.iva = 0.20
console.log(arroz_diana.iva)