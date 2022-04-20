const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
}

// MANEIRA MENOS PERFORMATICA
async function main() {
  try {
    const initialHour = (Date.now());

    const pokemon = await getPokemonById(1); // POKEMON 2(dois)
    // for (let i = 1; i <= 151; i++) {
    //   const pokemon = await getPokemonById(i); // POKEMON 2(dois)
    //   // pingar na API com id 2
    //   // esperar o retorno
    //   // e vai realizar o log
    // }

    console.log(`Pokemon: ${pokemon.idade.teste}`);
    const finalHour = Date.now();
    console.log((finalHour - initialHour) / 1000);
  } catch (error) {
    console.log('Erro na funcao Main\nError: ', error.message);
  }


}

// MANEIRA MAIS EFICIENTE
async function mainFast() {

  const promises = []
  const initialHour = (Date.now());

  for (let i = 0; i <= 151; i++) {
    if (i == 0) {
      promises.push(Promise.reject('Undefined'))
    } else {
      const promise = getPokemonById(i); // UMA PROMISE
      promises.push(promise); // ARMAZENA TODAS AS PROMISES QUE NAO FORAM RESOLVIDAS
    }

    // Promise <Pending>
  }

  pokemons = await Promise.all(promises);

  pokemons.forEach(
    pokemon => {
      console.log(`Pokemon: ${pokemon.name}`)
    }
  );

  const finalHour = Date.now();
  console.log((finalHour - initialHour) / 1000);

}

mainFast();