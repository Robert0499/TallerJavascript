i = 0;
var NewArray = [];

for (i = 0; i < 10; i++) {
  NewArray[i] = parseInt(prompt("Enter Numbers"));
  if (NewArray[i] % 2 === 0) {
    console.log("Even numbers are: " + NewArray[i]);

  }
  console.log("<--------------------------------------------------------->");
}

console.log(NewArray);