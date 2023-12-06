function calculaTroco(valorReais, valorDolar) {
    // Converte o valor recebido em reais para dólares.
    valorDolarRecebido = valorReais / valorDolar;
  
    // Calcula o valor do troco em dólares.
    valorDolarTroco = valorDolarRecebido - valorPedágio;
  
    // Cria uma lista para armazenar o troco.
    troco = [];
  
    // Converte o valor do troco em dólares para notas de 100 dólares.
    notas100 = valorDolarTroco // 100;
    valorDolarTroco = valorDolarTroco - notas100 * 100;
    troco.push(...[notas100]);
  
    // Converte o valor do troco restante em notas de 50 dólares.
    notas50 = valorDolarTroco // 50;
    valorDolarTroco = valorDolarTroco - notas50 * 50;
    troco.push(...[notas50]);
  
    // Converte o valor do troco restante em notas de 20 dólares.
    notas20 = valorDolarTroco // 20;
    valorDolarTroco = valorDolarTroco - notas20 * 20;
    troco.push(...[notas20]);
  
    // Converte o valor do troco restante em notas de 10 dólares.
    notas10 = valorDolarTroco // 10;
    valorDolarTroco = valorDolarTroco - notas10 * 10;
    troco.push(...[notas10]);
  
    // Converte o valor do troco restante em notas de 5 dólares.
    notas5 = valorDolarTroco // 5;
    valorDolarTroco = valorDolarTroco - notas5 * 5;
    troco.push(...[notas5]);
  
    // Converte o valor do troco restante em notas de 1 dólar.
    notas1 = valorDolarTroco;
    troco.push(...[notas1]);
  
    return troco;
  }
  