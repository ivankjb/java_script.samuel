var l1 = Math.round(Math.random()*50);
var l2 = Math.round(Math.random()*50);
var l3 = Math.round(Math.random()*50);
console.log(`los lados del triangulo son: ${l1} ${l2} ${l3}`)
function triangulo_lado(l1,l2,l3){
    let trian = `este triangulo es `
    if (l1==l2 && l1==l3){
        trian += `equilatero`
    }else if(l1 != l2 && l1!=l3){
        trian += `escaleno`
    }else{
        trian += `isoceles`
    }
    return trian;

}
console.log(triangulo_lado(l1,l2,l3))