var num1 = Math.round(Math.random() * 100);

function primo(num1) {
    var divisores = [];
    for (var i = 0; i <= num1; i++) {
        if (num1 % i == 0) {
            divisores.push(i);
        }
    }
    if (divisores.length < 3) {
        console.log('es primo')
    } else {
        console.log('no es primo');
    }

}

const primos=(num1)=>{
    var divisores = [];
    for (var i = 0; i <= num1; i++) {
        if (num1 % i == 0) {
            divisores.push(i);
        }
    }
    if (divisores.length < 3) {
        console.log('es primo')
    } else {
        console.log('no es primo');
    }


}