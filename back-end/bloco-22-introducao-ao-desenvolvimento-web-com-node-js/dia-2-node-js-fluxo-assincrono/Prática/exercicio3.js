// Exercício 3
// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

function calcNumb(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error ('Informe apenas números'))
    }
    const resultado =  (a + b) * c 

    if (resultado < 50) {
      return reject('Valor muito baixo');
    }

    resolve(resultado)
  });

}

function randomNumb() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callCalcNumb() {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumb);

  try {
    const resolve = await calcNumb(...randomNumbers)
    console.log(resolve);
  } catch (err) {
    console.error(err);
  }
}

callCalcNumb();