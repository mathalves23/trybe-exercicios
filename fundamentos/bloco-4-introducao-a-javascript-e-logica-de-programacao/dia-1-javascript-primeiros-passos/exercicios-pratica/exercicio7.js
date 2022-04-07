const nota = 70;
let conceito;

if (nota >= 90){
  conceito = "A";
  console.log(conceito);
}
else if (nota >= 80){
  conceito = "B";
  console.log(conceito);
}
else if (nota >= 70){
  conceito = "C";
  console.log(conceito);
}
else if (nota >= 60){
  conceito = "D";
  console.log(conceito);
}
else if (nota >= 50){
  conceito = "E";
  console.log(conceito);
}
else if (nota < 50){
  conceito = "F";
  console.log(conceito);
}
else if (nota < 0 || nota > 100){
  console.log("Erro! Digite uma nota entre 50 e 100.")
}