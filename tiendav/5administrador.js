

const promo = require('./promo');

var administrador = {
    _promociones: [],
    _usuario: 'francisco',
    _clave: 'matematico',
    get promociones() {
        return this._promociones
    },
    set promociones(promociones) {
        this._promociones = promociones
    },
       get promocion() {
        return this._promociones
    },

    agregarPromocion(categoria, descuento) {
        let c = new promo(categoria, descuento)
        this._promociones.push(c)
    },
 /*Va a validar si la categoria ingresada tiene descuento y va a buscar recorriendo entre todas las categorias  */
    buscarpromocion(categoria) {    
        let  respuesta
        for (let i = 0; i < this.promocion.length; i++) {
            let m = this.promocion[i]
            if (categoria == m.categoria) {
                respuesta = m.descuento
            }else{
                respuesta = 0
            }
        }
        return respuesta
    },
/*Busca la categoria,modifica el descuento si la categoria es igual */
    modificarpromocion(categoria, descuento) {
        for (let i = 0; i < this.promocion.length; i++) {
            let m = this.promocion[i]
            if (categoria == m.categoria) {
                m.descuento = descuento
            }

        }

    }
}
administrador.agregarPromocion('Comestibles', 20)


module.exports = administrador