i = 0;
var Array = [];
var NewArray = [];
j = 0;
for (i = 0; i < 10; i++) {

    NewArray[i] = parseInt(prompt("Enter Numbers"));
    if (NewArray[i] % 2 === 0) {
        console.log("Even numbers are: " + NewArray[i]);
    }

}


console.log("<---------------------------------------------------------------->");
NewArray.forEach((j, i) => {
    Array[j] = NewArray[i];
    Prime = true;
    for (i = 1; i < Array[j]; i++) {
        if (Array[j] / i === Math.round(Array[j] / i) && i !== 1 && i !== Array[j]) {
            Prime = false;
            break;
        }
    }
    if (Prime)
        console.log(`prime numbers are:  ${Array[j]} `);

});
//var contador = 0;
//var total = 0;
//for(contador = 0; contador <NewArray.length; contador++){
//  total=NewArray[contador];
//  
//}
//console.log("La suma de los pares es: " + total);


console.log(NewArray);