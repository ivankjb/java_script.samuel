/*8 de ciclos*/
var n=Math.floor (Math.random ()*50) 
var d =[]
 for(var i =1; i<=n; i++){
   if(i%5){
     d.push(i)
   } 
 }
console.log ('los multiplos de 1'+n+':'+d)