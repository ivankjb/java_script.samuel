function perfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++){
        if (num%i ==0){
            suma += i
        }
    }
    if (i == num){
        console.log(`${num} es perfecto`)
    }else{
        console.log(`${num} no es perfecto`)
    }
}
