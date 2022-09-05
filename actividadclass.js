class Vehiculo {
    constructor(Nro_serie,marca,año,precio) {
        this._Nro_serie=Nro_serie;
        this._marca=marca;
        this._año=año;
        this._precio=precio
    }

}

class camionetas extends Vehiculo{
    constructor(Nro_serie,marca,año,precio,Kilometraje,capacidad) {
     super(Nro_serie,marca,año,precio)
     this._kilometraje=Kilometraje;
     this._capacidad=capacidad;
    }
}

class autosCompactos extends Vehiculo{
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros){
    super(Nro_serie,marca,año,precio)
    this._cantidad_pasajeros=cantidad_pasajeros;
    }
}

class autosLujos extends autosCompactos {
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros,caballo_fuerza) {
    super(Nro_serie,marca,año,precio,cantidad_pasajeros)
    this._caballo_fuerza=caballo_fuerza;

    }

}

class vagonetas extends autosCompactos{ 
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros,sistema_frenos){
        super(Nro_serie,marca,año,precio,cantidad_pasajeros)
        this._sistema_frenos=sistema_frenos;
    }

}


let c=new camionetas(23,'chebrolet',2012,2000,'2500km','40kg')


camionetas.prototype.toString = function camioneString(){
    var retorno = "El numero de serie es: " + this._Nro_serie + " con marca " + this._marca +
     "del año " + this._año + " con precio de " + this._precio + "con un kilometraje de " + this._kilometraje + 
     "con capacidad de  " + this._capacidad; 
    return retorno;

}
console.log(c.toString())





/*function Perro(nombre,criadero,color,sexo) {
    this._nombre=nombre;
    this._criadero=criadero;
    this._color=color;
    this._sexo=sexo;
 }
 
 ePerro = new Perro("Gabby","Laboratorio","chocolate","femenino")

 Perro.prototype.toString = function perroToString() {
    var retorno = "Perro " + this._nombre + " es " + this._sexo + " su color es " + this._color + " " + this._criadero;
    return retorno;
  }
  console.log(ePerro.toString())*/
