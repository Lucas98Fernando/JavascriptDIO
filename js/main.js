/* ===== Aula 1 - Strings, alerts e console  =======

var nome = "Lucas Fernando";
var idade = 22;

var idadeString = "22";
var idadeNumero = 22;

var texto = "Javascript é muito bacana";

// Soma os números das variáveis e exibe como saída 44
// alert(idade + idadeNumero);

// Exibi como saída 2222, pois ele formou uma String
// alert(idade + idadeString);

console.log(nome + " é lindo");

// O replace serve para substituir todo conteúdo de uma variável ou apenas uma parte por outra
console.log(texto.replace("muito bacana", "incrível"));

// O toUpperCase converte tudo para letras maiúsculas
console.log(texto.toUpperCase());

// O toLowerCase converte tudo para letras minúsculas
console.log(texto.toLowerCase());

function apresentacao() {
    alert("Meu nome é " + nome + ", tenho " + idade + " anos.");
}

===== Fim do conteúdo da aula 1 ===== */

/* ======= Aula 2 - Array =========
// O array sempre começa com o índice 0
// Array de frutas
var frutas = ["Maçã", "Laranja", "Morango", "Abacaxi"];
// Exibe como saída no console apenas Maçã
// console.log(frutas[0]);

// O psuh serve para inserir novos elementos no array
frutas.push("Uva");
console.log(frutas);

// O pop serve para remover o último elementos no array
frutas.pop();
console.log(frutas);

// O length serve para medir o tamanho do array
console.log(frutas.length);

// O reverse serve para inverter a ordem dos elementos dentro do array
console.log(frutas.reverse());

// O toString converte todos os elementos do array para uma String
console.log(frutas.toString());

// O join altera os elementos de separação entre os elementos dentro do array
console.log(frutas.join(" - "));

===== Fim do conteúdo sobre arrays */


// Dicionário de arrays
var frutas = [{
    nome: "Maçã",
    cor: "Verde"
}, 
{
    nome: "Melancia",
    cor: "Vermelha"
}];

// Exibe como saída Vermelha
console.log(frutas[1].cor);