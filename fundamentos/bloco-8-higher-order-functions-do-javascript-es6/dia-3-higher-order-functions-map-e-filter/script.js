const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = numbers.filter((numero) => numero % 2 === 0);
console.log(isEven);


const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const semRicardo = arrayMyStudents.filter((nome) => nome != 'Ricardo');
console.log(semRicardo);