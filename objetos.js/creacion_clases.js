class animal {
    constructor(nombre) {
            this._nombre = nombre
                //console.log('Hiiii, se activo el constructor')
        }
        // camell case
        //getnombre (){
        //  return this.nombre
        //}

    get nombre() {
            return this._nombre
        }
        /* setnombre (nombre){
            this.nombre=nombre
        }*/
    set nombre(nombre) {
        this._nombre = nombre
    }
    mensaje() {
        console.log('Hiiii, soy un mesaje')

    }
}

var objeto1 = new animal('coneja');
console.log(typeof(objeto1))
    //objeto1.setNombre('Liebre)
objeto1.nombre = 'Conejito domestico'
    //console.log(objeto1.getNombre())
console.log(objeto1.nombre)
    //console.log(typeof(objeto1))

/*function suma(num1,num2) {
    return num1+num2
}*/