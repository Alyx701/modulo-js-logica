const prompt = require("prompt-sync")();

let saldo = Number(prompt("Quanto de saldo tem na conta?: "));
let valor = Number(prompt("Qual o valor do pix?: "));
let hora = Number(prompt("Que horas são?"));

if (valor <= 0) {
    console.log("Valor inválido");
} else if ((hora >= 20 || hora < 6) && valor > 1000) {
    console.log("Bloqueado: limite noturno");
} else if (valor > saldo) {
    console.log("Saldo insuficiente");
} else {
    saldo -= valor;
    console.log("Pix enviado. Saldo: R$ ", saldo);
}