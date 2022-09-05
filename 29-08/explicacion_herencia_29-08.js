class persona{
    constructor(nombre,documento){
        this._nombre = nombre;
        this._documento = documento;
    }

    set nombre(nombre){
        this._nombre = nombre;
        
    }
    get nombre(){
        return this._nombre
    }
    
    set documento(documento){
        this._documento = documento;
        
    }
    get documento(){
        return this._documento
    }
    
}

class aprendiz extends persona{
    constructor(nombre, documento, ficha){
        super(nombre, documento);
        this._ficha = ficha;
    }
    get ficha(){
        return this._ficha;
    }
    set ficha(ficha){
        this._ficha = ficha;

    }
}

