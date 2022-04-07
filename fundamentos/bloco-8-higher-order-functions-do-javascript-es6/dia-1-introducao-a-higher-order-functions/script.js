const wakeUp = () => {
  let mensagem = 'Acordando!!';
  return mensagem;
}

const breakfast = () => {
  let mensagem = 'Bora tomar café!!';
  return mensagem;
}

const sleep = () => {
  let mensagem = 'Partiu dormir!!';
  return mensagem;
}

// Ao chamar a função doingThings:
const doingThings = (action) => {
  const result = action();
  console.log(result)
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);