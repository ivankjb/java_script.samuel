// primer ejemplo se muestra una forma de hacer un hola en el cual 
// se observa una funcion que recibe como parametro otra funcion.
function doSomething(callback) { 
    callback();//callback al entrar como un argumento se debe especificar que es una funcion a ejecutar
                // para ello se hace uso de los parentesis.
}
function sayHi() {
    console.log("Hi!");
}
doSomething(sayHi);

// =========================================================================================================

// segundo ejemplo: se cran dos funciones una para determinar una calificacion y otra para hacer el llamado del 
// veredicto que significaria que esta ultima hace el llamado de la primera.
function judge(grade) {
    switch (true) {
    case grade == "A":
    console.log("You got an", grade, ": amazing!");
    break;
    case grade == "B":
    console.log("You got a", grade, ": well done!");
    break;
    case grade == "C":
    console.log("You got a", grade, ": alright.");
    break;
    case grade == "D":
    console.log("You got a", grade, ": hmmm...");
    break;
    default:
    console.log("An", grade, "! What?!");
    }
   }
   function getGrade(score, callback) {
    let grade;
    switch (true) {
    case score >= 90:
    grade = "A";
    break;
    case score >= 80:
    console.log(score);
    grade = "B";
    break;
    case score >= 70:
    grade = "C";
    break;
    case score >= 60:
    grade = "D";
    break;
    default:
    grade = "F";
    }
    callback(grade);
   }
   getGrade(85, judge);
// la funcion getgrade obtiene la funcion judge y la nota que adquirio 
// como la funcion judge imprime un mensaje dependiendo de la letra a la que length
// pertenezca la nota la funcion getGrade determina la letra y luego llama a la funcion judgecon
// con el grado obtenido.

// =========================================================================================================

//    se propuso un ejercicio en donde se ingresaba un nombre y este se dividia para ingresarlo a un Array
//    que posteriormente se usaba para mostrar un mensaje en consola. 
function greet(fullName){
    console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
   }
   function processCall(user, callback){
    const fullName = user.split(" ");//<= la funcion split divide un cadena y la convierte en array segun el
    // separador que se le pase por argumento
    callback(fullName);
   }
   processCall("Laurence Svekis", greet);
