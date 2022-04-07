let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let num of numbers){
  soma = soma + num;
}
let media = soma / numbers.length;
console.log("A soma dos valores é: "+ soma);
console.log("A média dos valores é: "+ media);
if (media > 20) {
  console.log("Valor maior que 20");
}
else {
  console.log("Valor menor ou igual a 20");
}