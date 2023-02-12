// Seu código aqui...
let primeiroNumero = prompt("Digite o primeiro número:");
let primeiroNumeroConvertido = Number(primeiroNumero);

let segundoNumero = prompt("Digite o segundo número:");
let segundoNumeroConvertido = Number(segundoNumero);

let operacaoRealizada = prompt("Deseja realizar uma adição, subtração, multiplicação ou divisão?");

if(operacaoRealizada === "adição"){
  let resultadoSoma = primeiroNumeroConvertido + segundoNumeroConvertido;
  alert(resultadoSoma);
} else if (operacaoRealizada === "subtração"){
  let resultadoSubtracao = primeiroNumeroConvertido - segundoNumeroConvertido;
  alert(resultadoSubtracao);
} else if (operacaoRealizada === "multiplicação"){
  let resultadoMultiplicacao = primeiroNumeroConvertido * segundoNumeroConvertido;
  alert(resultadoMultiplicacao);
} else if (operacaoRealizada === "divisão"){
  let resultadoDivisao = primeiroNumeroConvertido / segundoNumeroConvertido;
  alert(resultadoDivisao);
}