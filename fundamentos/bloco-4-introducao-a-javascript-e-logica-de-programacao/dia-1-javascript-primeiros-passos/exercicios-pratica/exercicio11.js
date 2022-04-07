const salarioBruto = 3000;
let aliquota;
let impostoRenda;
let parcela;

//Cálculo do Salário Base
if (salarioBruto <= 1556.94){
  aliquota = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92){
  aliquota = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82){
  aliquota = salarioBruto * 0.11;
}
else {
  aliquota = 570.88;
}

const salarioBase = salarioBruto - aliquota;

//Cálculo do Salário Bruto
if (salarioBase < 1903.98) {
  impostoRenda = 0;
}
else if (salarioBase <= 2826.65) {
  parcela = 142.8;
  impostoRenda = (salarioBase * 0.075) - parcela;
}
else if (salarioBase <=  3751.05) {
  parcela = 354.8;
  impostoRenda = (salarioBase * 0.15) - parcela;
}
else if (salarioBase <= 4664.68) {
  parcela = 636.13;
  impostoRenda = (salarioBase * 22.5) - parcela;
}
else {
  parcela = 869.36;
  impostoRenda = (salarioBase * 27.5) - parcela;
}

let salarioLiquido = salarioBase - impostoRenda;

//Impressão dos resultados
console.log("Salário Base: " + salarioBase);
console.log("Alíquota INSS: " + aliquota);
console.log("Alíquota Imposto de Renda: " + impostoRenda);
console.log("Parcela a deduzir: " + parcela);
console.log("Salário Líquido: " + salarioLiquido);