/* Create a class for Person including the constructor for firstname and
lastname.
2. Create a variable and assign a value of the new Person object using your
friend's first and last names.
3. Now add a second variable with another friend's name using their first name
and last name.
4. Output both friends into the console with a greeting of hello. */

class persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    nombreCompleto() {
        console.log(`${ this._nombre + ' ' + this._apellido}`)
    }
}

var person1 = new persona('ivan', 'jaramillo');

var person2 = new persona('andres', 'iniesta');

console.log(`${person1.nombre+ ' ' + person1.apellido } y ${person2.nombre + ' '+ person2.apellido} el programa les dice hola`)

person1.nombreCompleto