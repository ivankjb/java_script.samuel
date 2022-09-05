var billete=Math.round(Math.random()* 1000000)
console.log(billete)
 var cincuenta =0;
 var veinte =0;
 var diez =0;
 var cinco =0;
 var dosmil =0;
 var mil =0;
 var sobra =0;

 if(billete>50000){
    cincuenta=Math.trunc(billete/50000)
    billete=billete%50000
    
 }
 if (billete>20000){
   veinte=Math.trunc(billete/20000)
   billete=billete%20000}

  if (billete>10000){
    diez=Math.trunc(billete/0000)
    billete=billete%10000}

      if (billete>5000){
        cinco=Math.trunc(billete/5000)
        billete=billete%5000}
        
          if (billete>2000){
            dosmil=Math.trunc(billete/2000)
            billete=billete%2000}

            if (billete>1000){
                mil=Math.trunc(billete/1000)
                sobra=billete%1000}
                

 console.log(cincuenta,'billetes de 50 mil')
 console.log(veinte,'billetes de 20 mil')
 console.log(diez,'billetes de 10 mil')
 console.log(cinco,'billetes de 5 mil')
 console.log(dosmil,'billetes de 2 mil')
 console.log(mil,'billetes de mil')
 console.log(sobra,'en monedas')