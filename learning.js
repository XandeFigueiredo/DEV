//Variáveis

var nomeCompleto = "Alexandre Figueiredo";
var minhaIdade = 39;
const NATURALIDADE = "Brasil";

//tipos primitivos

var meuTamanho = 153;
const PI = 3.14159265359;
var corDaMinhaCamisa = "Branca";
var queroEstudar = true;
var computadorLigado = false;

//Operadores Lógicos

resultado = elementoA && elementoB;
resultado = elementoA || elementoB;

//Estruturas Condicionais

if (elementoA % 2 === 0) {
  resultado = "par";
} else {
  resultado = "ímpar";
}

--------------------
if (anoDeNascimento <= 1945) {
  resultado = "Geração silenciosa"
} else if (anoDeNascimento <= 1964) {
  resultado = "Boomers"
} else if (anoDeNascimento <= 1980) {
  resultado = "Geração X"
} else if (anoDeNascimento <= 1996) {
  resultado = "Millennials"
} else {
  resultado = "Geração Z"
}

//Arrays

function retornaPrimeiroElemento(lista) {
  var resultado;

  if (lista.length > 0) {
    resultado = lista[0];
  } else {
    resultado = "array vazio";
  }

  return resultado;
}

//Strings

if (primeiraString.length >= segundaString.length) {
  resultado = segundaString + primeiraString
} else {
  resultado = primeiraString + segundaString
}

//Estruturas de repetição

for(var index = 0; index < lista.length; index++) {
  console.log(lista[index]);
}
for(var index = 0; index < frase.length; index++) {
  resultado.push(frase[index])
}

//Funções

function imprimeSaudacao(nome) {
  var saudacao = "Olá, " + nome + "!";
  console.log(saudacao);
}

function somaDoisElementos(elementoA, elementoB) {
  return elementoA + elementoB;
}

unction calculaIMC(altura, peso) {
  var valorDoIMC = peso / (altura * altura);
  return valorDoIMC;
}

var resultados = []

for(var index = 0; index < numeros.length; index++) {
  var elementoMultiplicadoPorDois = numeros[index] * 2
  resultados.push(elementoMultiplicadoPorDois)
}

return resultados;

//JavaScript

for (var index = 0; index < n; index++) {
  var linhaDeAsteriscos = '';

  for (var linha = 0; linha < n; linha++) {
    linhaDeAsteriscos = linhaDeAsteriscos + '*';
  }

  console.log(linhaDeAsteriscos);
}

//1

var numerosPrimos = [2, 3];

for (var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
  var quantidadeDeDivisores = 0;

  for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
    if (numeroAtual % numeroMenor == 0) {
      quantidadeDeDivisores ++;
    }
  }

  if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
  }
}

return numerosPrimos;

//2

var palindromo = "";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
  return "SIM, SOU UM PALÍNDROMO"
} else {
  return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
}