const cadastro = (nome) => {
  const arroba = nome.replace(' ', '_').toLowerCase();
  const objeto = {
    nomeCompleto: nome,
    email: arroba + '@trybe.com',
  };
  return objeto;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(cadastro));