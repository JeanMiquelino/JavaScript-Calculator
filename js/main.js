function inserir(numero){

    var num = document.getElementById("display").innerHTML + numero;
    document.getElementById("display").innerHTML = num;
}
function limpar(){
    document.getElementById("display").innerHTML = ("");
}
function back(){
var back = document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML = back.substring(0, back.length -1);
}
function calcular(){
    var equa = document.getElementById("display").innerHTML;
    if(equa){
    document.getElementById("display").innerHTML = eval(equa)
    }else{
       window.alert("Nada Para Calcular")
    }
}