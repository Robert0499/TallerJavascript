function option() {
    var menu = prompt("1. Make a sum\n\
2. Perform a subtraction\n\
3. Perform a multiplication\n\
4. Make a division\n\
0. Quit the program ");
    return parseInt(menu);

}
var result = option();
function sum() {
    var a = Number(prompt("Enter first number"));
    var b = Number(prompt("Enter second number"));
    var Sump = (a + b);
    console.log("The result of the sum is " + Sump);
}

function subtractrion() {
    var rest1 = Number(prompt("Enter first number"));
    var rest2 = Number(prompt("Enter second number"));
    console.log("The result of the subtraction is: " + (rest1-rest2));
    

}
function multiplication (){
    var mult1 = Number(prompt("Enter first number"));
    var mult2 = Number(prompt("Enter second number"));
    console.log("The result of the multiplication is: " + (mult1*mult2));
}
function division (){
    var div1 = Math.round(Number(prompt("Enter first number")));
    var div2 = Math.round(Number(prompt("Enter second number")));
    console.log("The result of the division is: " + (div1/div2));
}
function bye (){
    alert("thanks for using our program");
}


switch (result) {
    case 1:
        sum();
        break;
    case 2:
        subtractrion();
        break;
    case 3:
        multiplication();
        break
    case 4:
        division();
        break
    case 0:
        bye();
        

}
