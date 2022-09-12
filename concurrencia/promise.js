// primer ejemplo: primero se crea la promesa luego se crea una funcion en base a la promesa
// para evaluar su resultado.

let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example 
    let x = 5;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error
    }
});
promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
);

// =========================================================================================================

// segundo ejemplo: 

const promise2 = new Promise((resolve, reject) => {
    reject("oops... ");
})

.then(value => {
console.log(value);
return "we";
})
.then(value => {
console.log(value);
return "can";
})
.then(value => {
console.log(value);
return "chain";
})
.then(value => {
console.log(value);
return "promises";
})
.then(value => {
console.log(value);
})
.catch(value => {
console.log(value);
})