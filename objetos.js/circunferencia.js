 //Generar cuatro objetos de figuras geometricas 

 var cuadrado = {
     lados1: 2,
     perimetro: () => console.log(cuadrado.lados1 * 4),
     area: () => console.log(cuadrado.lados1 ** 2)
 }
 cuadrado.area()
 cuadrado.perimetro()

 var triangulo = {
     base: 6,
     altura: 15,
     hipotenusa: function() {
         return ((this.base * 2) + (this.altura * 2)) ** (1 / 2)
     },
     perimetro: (base, lado) => (lado * 2) + base,
     areaf: function() {
         return (this.base * this.altura) / 2
     },
 }
 console.log(triangulo.areaf())
 console.log(triangulo.hipotenusa())
 var circulo = {
     radio: 10,
     perimetrof: () => console.log((2 * 3.1416) * circulo.radio),
     area: () => console.log((3.1416 * circulo.radio ** 2))
 }
 circulo.perimetrof()
 circulo.area()

 function circunferencia(objeto) {
     if (objeto.hasOwnProperty('radio')) {
         console.log(`la circunferencia es: ${objeto.radio*3.1416*2}`)
     } else {
         console.log(`el objeto no puede generar una circunferencia`)
     }

 }

 circunferencia(circulo);

 var prueba = circulo.hasOwnProperty('radio')

 console.log(typeof(prueba))