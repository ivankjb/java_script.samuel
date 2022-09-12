const producto = require('./producto');
const categoria = require('./categoria')
const promo = require('./promo');
const administrador = require('./administrador')
const catalogo = require('./catalogo');


class carrito {
    _productos = [];
    _preciototal = 0

    constructor() {}
    get productos() {
        return this._productos
    }
    agreagar_producto(producto, cantidad) {
        var factura = [];
        var p = catalogo.obtenerproducto(producto)
        var r = p[1]; /*posicion del producto */
        var precio = r.precio*cantidad
        var desc = administrador.buscarpromocion(p[0]) /*Nombre de la categoria */
        factura.push(r) //nos agrega el producto 'en la posicion 0'
        factura.push(cantidad) // nos agrega la cantidad 'en la posicion 1'

        if ( desc != 0) {
            precio = precio - (precio * desc);
            this._preciototal += precio
            precio = `${precio} con descuento del ${desc}% `
        } else {
            this._preciototal+=precio
        }
  
        factura.push(precio)
        this._productos.push(factura)
        console.log(`========== factura ==========`)
        for(let t = 0; t < this._productos.length; t++){
            let f = this._productos[t];
            console.log(`----------------------------- \n ${f[0].producto}, cantidad ${f[1]}  precio a pagar: ${f[2]}`) 
        }
        console.log(`----------------------------- \n El valor total de la compra es: ${this._preciototal}`)
    }
     pagar(dinero){ 
        var respuesta = dinero-this._preciototal
        if (respuesta<0) {
            respuesta = respuesta * -1 // Se pone negativo para que al mostrar el dinero que nos haga falta no aperezca en negativo 
            console.log('UPSS!!! TE HACE FALTA DINERO PARA REALIZAR LA COMPRA, TE FALTA: ', respuesta  )
        } else if (respuesta>0) {
            console.log('SU COMPRA SE HA REALIZADO Y LE SOBRA: ', respuesta )
            
        } else {
            console.log(' SU COMPRA SE HA REALIZADO NO HAY CAMBIO ')
            
        } 
     }

}

let carrito1 = new carrito()

carrito1.agreagar_producto('Fabuloso', 1)
carrito1.agreagar_producto('Gomas grisly',2)
carrito1.pagar(50000)
module.exports = carrito;