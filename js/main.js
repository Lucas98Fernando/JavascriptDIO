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