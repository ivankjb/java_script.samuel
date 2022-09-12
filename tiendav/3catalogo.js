const categoria = require('./categoria');
const producto = require('./producto');

/*Creamos un objeto en ves de una clase llamada catalogo esto para evitar extendernos
 con el codigo, ya que el objeto va a ser una constante en el sistema por lo tanto no necesita una clase
 para poderse crear porque solo va a haber un unico objeto con estas carateristicas  */

var catalogo = {
    _listacatalogo: [],
    
    get listacatalogo() {
        return this._listacatalogo
    },
    /*Se hace el llamado del construtor para categoria, que posteriormete adicionara dicho objeto a  
    la lista categoria que posee lista catalogo*/
    ingresarcategoria(nombre_categoria) {
        let cat = new categoria(nombre_categoria)
        this._listacatalogo.push(cat)
    },
    /* Se crea un for con el objetivo de recorrer la listacatalogo en donde va a validar si esta el produto
      dentro de la categoria 
      i va a ser la posicion de la categoria
        */
    obtenerproducto(nombre) {
        var respuesta
        for (let i = 0; i < this._listacatalogo.length; i++) {
            let p = this._listacatalogo[i].buscarproducto(nombre)
            if (p == undefined) {

            } else {
                respuesta = [this._listacatalogo[i].nombre, p]
            }
        }
        return respuesta
    },
    /* Para ingresar el producto se le especifica al constructor en que categoria debe ingresar el producto y eso 
    lo va a comprobar por medio de un for el cual va a recorrer*/
    ingresarproductos(categoria, codigo, nombre, precio) {
        for (let i = 0; i < this._listacatalogo.length; i++) {
            let a = this._listacatalogo[i]
            if (categoria == a.nombre) {
                this._listacatalogo[i].composicion(codigo, nombre, precio)
            }
        }
    },
    mostrarlistacatalogo() {
        for (let i = 0; i < this._listacatalogo.length; i++) {
            let l = this._listacatalogo[i]
            console.log(`======= ${l.nombre} =========`)
            console.log(l.listaproductos)
        }

    }

}


catalogo.ingresarcategoria('CuidadoCasa')
catalogo.ingresarcategoria('Comestibles')
catalogo.ingresarcategoria('Cuidadopersonal')


catalogo.ingresarproductos('CuidadoCasa', 21, 'Fabuloso', 10000)
catalogo.ingresarproductos('CuidadoCasa', 23, 'papelhigienico', 17000)
catalogo.ingresarproductos('Comestibles',30,'Gomas grisly',2300)




/*Se usa para exportar la clase */
module.exports = catalogo