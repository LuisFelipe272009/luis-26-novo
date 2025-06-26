let nota1 = Number (windows.prompt("Digite aqui sua primeira nota"));
let nota2 = Number (windows.prompt("Digite aqui sua segunda nota"));
let nota3 = Number (windows.prompt("Digite aqui sua terceira nota"));
let pontosfaltando;

let total= (nota1 + nota2 + nota3)/3;

alura = "alura"

  let resultado = nota1 + nota2 + nota3;
   alert(" A média é " + resultado + ".")

if(total >= 60){
    alert("Você atingiu a média" + total)
    alert("Aprovado")
} else {
    pontosfaltando = 60 - total
    alert(nome + "REPROVADO BURRÃO, faltam " + pontosfaltando + "pontos, estuda aí COMÉDIA!")
}