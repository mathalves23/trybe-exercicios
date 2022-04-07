// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((resultado, numero) => resultado + numero); 
// console.log(sumNumbers);


// const numbers = [50, 85, -30, 3, 15];
// let maior = 0;
// for (index of numbers) {
//   if (index > maior) {
//     maior = index;
//   }/
// };
// console.log(maior);


const numbers = [50, 85, -30, 3, 15];

const maiorNumero = numbers.reduce((accMaior, numero) => {
  if (accMaior < numero) return numero;
  return accMaior;
})

console.log(maiorNumero);

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger);