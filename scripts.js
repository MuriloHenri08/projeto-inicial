botao.addEventListener("click", alertar);
 
var nome= document.getElementById("nome");
var saida= document.getElementById("saida-de-dados");
 
function alertar(){
    //alert("O nome foi inserido!!!" + nome.value);
 
      saida.innerText = "nome:" + nome.value;
   
}
