const longestWord = text => {
  let wordArray = text.split(' ');
  let contador = 0;
  let resultado = '';
  
  for (const word of wordArray){
    if(word.length > contador) {
      contador = word.length;
      resultado = word;
    }
  }
  return resultado;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));