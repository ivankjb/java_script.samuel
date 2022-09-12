class usuario {
    _nombre
    _apellido
    _correo
    _ntel
    _direccion
    constructor(nombre, apellido,correo,ntel,direccion){
    this._nombre=nombre
    this._apellido=apellido
    this._correo=correo
    this._ntel=ntel
    this._direccion=direccion
    }
    get nombre() {
        return  this._nombre
    }
    get apellido() {
        return  this._apellido
    }

    get correo() {
        return  this._correo
    }
    get ntel() {
        return  this._ntel
    }
    get direccion() {
        return  this._direccion
    }
    get contraseña(){
        return this._contraseña
    }

    set nombre(nombre) {
        this._nombre = nombre
    }
    set apellido(apellido) {
        this._apellido = apellido
    }
    set correo(correo) {
        this._correo = correo
    }
    set ntel(ntel) {
        this._ntel = ntel;
    }
    set direccion(direccion) {
        this._direccion = direccion
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
    
}



/*Se usa para exportar la clase */
module.exports =usuario