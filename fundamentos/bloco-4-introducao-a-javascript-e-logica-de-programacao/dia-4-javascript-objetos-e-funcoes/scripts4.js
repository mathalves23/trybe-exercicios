var statusCarro = "desligado";

function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  }
  else {
    statusCarro = "desligado";
  }
  return statusCarro;
}
ligarDesligar();
console.log(statusCarro);