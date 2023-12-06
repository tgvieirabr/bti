function calculaValorTarifaComDesconto(valorTarifa, passagens, desconto) {
    // Verifica se o número de passagens é maior ou igual a 10.
    if (passagens >= 10) {
      // Calcula o desconto por passagem.
      const descontoPorPassagem = valorTarifa * desconto / 100;
  
      // Calcula o valor da tarifa com desconto.
      const valorTarifaComDesconto = valorTarifa - descontoPorPassagem;
  
      // Verifica se o valor da tarifa com desconto é menor ou igual ao valor mínimo.
      if (valorTarifaComDesconto <= valorTarifa * 0.2) {
        // O valor a pagar é o valor mínimo.
        return valorTarifa * 0.2;
      } else {
        // O valor a pagar é a tarifa com desconto.
        return valorTarifaComDesconto;
      }
    } else {
      // O valor a pagar é a tarifa cheia.
      return valorTarifa;
    }
  };



/*

descontoPorPassagem = 7,90 * 0.05 = 0,395
valorTarifaComDesconto = 7,90 - 0,395 = 7,505
valorMinimo = 7,90 * 0,2 = 1,58


*/
const valorTarifa = 7.90;
const passagens = 15;
const desconto = 5;

const valorTarifaComDesconto = calculaValorTarifaComDesconto(valorTarifa, passagens, desconto);

console.log(valorTarifaComDesconto);
