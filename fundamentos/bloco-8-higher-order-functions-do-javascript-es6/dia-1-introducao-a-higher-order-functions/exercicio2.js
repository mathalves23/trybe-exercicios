const numberChecker = (escolhido, sorteado) => escolhido === sorteado;

const lotteryResult = (escolhido, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(escolhido, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));