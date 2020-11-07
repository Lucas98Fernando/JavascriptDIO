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

/*====== Dicionário =======
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

======= Fim do conteúdo da aula 2 =====*/

/* ========= Date ============
var d = new Date;
// Exibe os dados completos de data, hora e minutos atuais do sistema
alert(d);
// Exibe os minutos atuais do sistema
alert(d.getMinutes());
=========================*/


/* ===== Laços de repetição  =====
var count;

for (count=0; count < 5; count++) {
    console.log(count);
}

var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
=====================*/

/* ===== Condicionais ======
// Com o comando prompt, é possível fazer com que o browser exiba uma pergunta quando a página é carregada
var idade = prompt("Qual é a sua idade ?");

if (idade >= 18) {
    alert("Acesso permitido.");
} else {
    alert("Acesso proibido, usuário menor de idade.");
}
==================== */


/* ========== Funções ==========
//Função para soma
function soma(n1, n2) {
    return n1 + n2;
}

// alert(soma(5, 10));

// Função para subsstituir palavras em uma frasse qualquer
function setReplace(texto, nome, novoNome) {
    return texto.replace(nome, novoNome);
}

//alert(setReplace("O Javacript é bom", "bom", "maravilhoso demais !"));

function validar(idade) {
    var resultado;
    if (idade >= 18) {
        resultado = "Você maior de idade !";
    } else {
        resultado = "Deu ruim fera";
    }
    return resultado;
}

idade = prompt("Qual é a sua idade ?");
alert(validar(idade));
================================*/

// Função que insere um texto dentro da tag <a> com id="resposta", no arquivo index.html
function btn() {
    document.getElementById("resposta").innerHTML = "Você clicou no botão !";
}

// Função de redirecionamento para outra páginas
function redirecionar() {
    // window.open("https://github.com/"); // Abre o link em outra janela
    window.location.href = "https://github.com/"; // Abre o link na mesma janela
}

// Função para mudar o texto quando passa o mouse
function mudar() {
    // document.getElementById("cor").style.color = "red";
    document.getElementById("texto").innerHTML = "Você passou o mouse aqui !";
}

// Função para voltar para o texto original quando tirar o mouse
function voltar() {
    document.getElementById("texto").innerHTML = "Passe o mouse aqui !";
}

function carregar() {
    alert("A página foi carregada utilizando o onload");
}

// Sempre que mudar o valor selecionado no select, o valor atual será atualizado
function mudando(elemento) {
    console.log(elemento.value);
}