let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 10000;

for (let num of numbers){
  if (num < menor) {
    menor = num;
  }
}

console.log("O menor número é: " + menor);