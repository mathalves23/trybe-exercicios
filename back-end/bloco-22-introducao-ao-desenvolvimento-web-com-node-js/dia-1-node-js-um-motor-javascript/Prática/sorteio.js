const readline = require('readline-sync');

const sorteio = () => {
  const palpite = readline.questionInt('Adivinhe um número de 1 a 10: ');
  const sorteado = Math.ceil(Math.random() * 10);
  console.log(`Seu palpite foi ${palpite} e o número sorteado foi ${sorteado}. `)
  if (palpite === sorteado) {
    console.log('Parabéns! Você acertou!');
  }
  else {
    console.log('Você errou! Tente outra vez.')
  }
}


sorteio();