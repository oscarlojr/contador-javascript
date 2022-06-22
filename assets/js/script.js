/*
Caso você queira ir além, aqui estão algumas dicas de coisas para tentar:

  1 - Tente implementar os eventos usando o método addEventListener.
  2 - Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
  3 - Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.
*/

var contadorNumero = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
  currentNumber += 1;
  contadorNumero.innerHTML = currentNumber;
  // if (contadorNumero.innerHTML < 0){
  //   contadorNumero.style.color = "red";
  // } else {
  //     contadorNumero.style.color = "white";
  //  }
  contadorNumero.style.color = (contadorNumero.innerHTML < 0) ? "red" : "white";

}


function decrement(){
  currentNumber -= 1;
  contadorNumero.innerHTML = currentNumber;
  // if (contadorNumero.innerHTML < 0){
  //   contadorNumero.style.color = "red";
  //   } else {
  //     contadorNumero.style.color = "white";
  //   }
  contadorNumero.style.color = (contadorNumero.innerHTML < 0) ? "red" : "white";
}
