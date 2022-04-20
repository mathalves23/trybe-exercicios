// Exercício 1
// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido

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

calcNumb(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calcNumb(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calcNumb(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
