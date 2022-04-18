const calcIMC = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2).toFixed(2));
  console.log(`O IMC é de: ${imc}`);
}

calcIMC(78, 178);
