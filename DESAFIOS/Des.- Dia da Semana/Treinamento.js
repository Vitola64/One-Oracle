alert ('Olá, Bem vindo ao treinamento JS');

let nome = prompt ('Qual seu nome?')
let DiaHoje = prompt ('Que dia da semana é hoje?');
let sabado = 'Sabado';
let domingo = 'Domingo';

console.log ('Definindo let sabado --> ', sabado)
console.log ('Definindo let domingo --> ', domingo)

if (sabado == DiaHoje) {
    alert ('Bom fim de semana, ' + nome + '!')
} 
else if (domingo == DiaHoje) {
    alert ('Bom fim de semana! ' + nome + '!')
}
else {
    alert ('Tenha uma boa semana, ' + nome + '!')
}

console.log ('se o dia de hoje for sábado --> ', sabado == DiaHoje)
console.log ('se o dia de hoje for domingo --> ', domingo == DiaHoje)
console.log ('se o dia de hoje não for sabado nem domingo --> ', sabado !== DiaHoje && domingo !== DiaHoje)


// Apanhei um pouco para fazer esse desafio, adimito ter pedido ajuda ao ChatGPT, mas me esforcei ao máximo para fazer por conta própria (Usei ChatGPT somente para corrigir bugs que eu não consegui resolver.)