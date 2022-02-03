function calcular(){
   n1 = parseFloat(document.getElementById("n1").value)
   n2 = parseFloat(document.getElementById("n2").value)

   selector = document.getElementById("selector").value
   if(Number.isNaN(n1) || Number.isNaN(n2)){
      document.getElementById("resultado").innerHTML = `Não foi possível efetuar o cálculo` 
   }else{
      switch(selector){
      case '+':
         calculo = (n1 + n2)
         document.getElementById("resultado").innerHTML = `O resultado de ${n1} + ${n2} é = ${calculo}` 
         break
      case '-':
         calculo = (n1 - n2)
         document.getElementById("resultado").innerHTML = `O resultado de ${n1} - ${n2} é = ${calculo}` 
         break
      case '*':
         calculo = (n1 * n2)
         document.getElementById("resultado").innerHTML = `O resultado de ${n1} x ${n2} é = ${calculo}` 
         break
      case '/':
         calculo = (n1 / n2)
         if (n2 == 0) {
            document.getElementById("resultado").innerHTML = `Não foi possível efetuar o cálculo`  
         } else {
            document.getElementById("resultado").innerHTML = `O resultado de ${n1} / ${n2} é = ${calculo}`
         }
         break
      case '%': 
         calculo = ((n1/100) * n2)
         document.getElementById("resultado").innerHTML = `O resultado de ${n1} % ${n2} = ${calculo}`
         break
      }
   }  
} 