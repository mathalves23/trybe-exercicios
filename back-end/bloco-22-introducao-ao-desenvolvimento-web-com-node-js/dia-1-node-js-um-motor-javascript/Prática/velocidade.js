const readline = require('readline-sync');

const calcMedia = () => {
  const distancia = readline.questionInt('Qual a distância? ');
  const tempo = readline.questionInt('Em quanto tempo? ');
  const media = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média para a distância ${distancia}km em ${tempo} hora(s) é de: ${media} km/h`);
};

calcMedia();