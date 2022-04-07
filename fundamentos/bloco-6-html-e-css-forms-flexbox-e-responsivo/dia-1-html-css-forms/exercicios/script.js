let states = document.getElementById('state');
const submit = document.querySelector('#enviar');
const clear = document.querySelector('#limpar');

function addState() {
  let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (index = 0; index < estados.length; index += 1){
    let stateOption = document.createElement('option');
    stateOption.value = estados[index];
    stateOption.innerHTML = estados[index];
    states.appendChild(stateOption);
  }
} 

window.onload = function () {
  addState();
}