const a = 12;
const b = 8;
const c = 26;
let maior;

if (a > b && a > c){
  maior = a;
  console.log("O maior número é o: " + maior);
}
else if (b > a && b > c){
  maior = b;
  console.log("O maior número é o: " + maior);
}
else if (c > a && c > b){
  maior = c;
  console.log("O maior número é o: " + maior);
}