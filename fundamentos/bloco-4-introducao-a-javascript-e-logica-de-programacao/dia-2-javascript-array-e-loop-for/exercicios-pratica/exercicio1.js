let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Da primeira forma: ")
for (let num of numbers){
  console.log(num);
}
console.log("\nDa segunda forma: ")
for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}