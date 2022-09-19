let cnt = 0;
function outputTime(val) {
return new Promise(resolve => {
setTimeout(() => {
cnt++;
resolve(`valor promesa ${val} contador:${cnt}`);
},0);
});
}
async function unaLlamada(val) {
console.log(`valor asincronismo= ${val} es:${cnt}`);
const res = await outputTime(val);
console.log(res);
}
for (let x = 1; x < 4; x++) {
    unaLlamada(x);
}