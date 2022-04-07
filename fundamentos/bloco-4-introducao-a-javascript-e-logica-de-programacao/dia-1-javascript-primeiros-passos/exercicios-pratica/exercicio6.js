const peca = "Bishop";

if (peca.toLowerCase() === "bishop"){
  console.log("diagonally any number of squares");
}
else if (peca.toLowerCase() === "king"){
  console.log("one square in any direction");
}
else if (peca.toLowerCase() === "queen"){
  console.log("diagonally, horizontally, or vertically any number of squares");
}
else if (peca.toLowerCase() === "rook"){
  console.log("horizontally or vertically any number of squares");
}
else if (peca.toLowerCase() === "knight"){
  console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically");
}
else if (peca.toLowerCase() === "pawn"){
  console.log("vertically forward one square, with the option to move two squares if they have not yet moved");
}
else {
  console.log("Error!")
}