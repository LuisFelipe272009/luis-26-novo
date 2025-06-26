let num1;
let num2;
let resultado;
let parouimpar;
num1 = Number(window.prompt("Digite aqui seu primeiro numero"));
num2 = Number(window.prompt("Digite o segundo numero"));

resultado = num1 + num2;

parouimpar = resultado % 2;

if( parouimpar ==0) {
    alert("O numero " + resultado + " e par");
} else {
    alert("o numero " + resultado + "e impar");
}