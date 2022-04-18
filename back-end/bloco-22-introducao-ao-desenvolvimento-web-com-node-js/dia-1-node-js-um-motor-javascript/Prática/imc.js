const readline = require('readline-sync');


const calcIMC = () => {
  const peso = readline.questionInt('Qual seu peso? ');
  const altura = readline.questionInt('Qual sua altura? ');
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`O IMC é de: ${imc}`);

  if (imc >= 40) {
    console.log('Obsesidade graus III e IV');
  }
  else if (imc >= 35) {
    console.log('Obsesidade grau II');
  }
  else if (imc >= 30) {
    console.log('Obsesidade grau I');
  }
  else if (imc >= 25) {
    console.log('Acima do peso (sobrepeso)');
  }
  else if (imc >= 18,5) {
    console.log('Peso normal');
  }
  else {
    console.log('Abaixo do peso(magreza)')
  }
}

calcIMC();
