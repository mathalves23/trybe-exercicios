const lado1 = 45;
const lado2 = 95;
const lado3 = 40;
const soma = lado1 + lado2 + lado3;

if (lado1 <= 0 || lado2 <=0 || lado3 <=0) {
  console.log("ERRO! Os valores dos ângulos devem ser positivos");
}
else if (soma === 180) {
  console.log("true");
}
else{
  console.log("false");
}