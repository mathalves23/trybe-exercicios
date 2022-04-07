const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordenado = array => {
  return array.sort(function(a, b){return a - b});
}

console.log(`Os números ${ordenado(oddsAndEvens)} se encontram ordenados de forma crescente!`)
