//Primeira forma
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}

let media = soma / numbers.length;
console.log("A soma dos valores é: "+ soma);
console.log("A média dos valores é: "+ media);

//Segunda forma
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0;
for (let num2 of numbers2){
  soma2 = soma2 + num2;
}
let media2 = soma2 / numbers2.length;
console.log("A soma dos valores é: "+ soma2);
console.log("A média dos valores é: "+ media2);