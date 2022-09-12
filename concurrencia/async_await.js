// primer ejemplo: se intenta demostrar que el async es una funcion poderosa que fuciona eficientemente dentro 
// del codigo asincrono y que funciona de la misma manera al codigo sincronico donde se evaluan condiciones y se 
// ejecutan ciertas acciones.

function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);
   