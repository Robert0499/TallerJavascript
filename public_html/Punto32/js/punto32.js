class number {
  constructor() {
    this._option;
    this._sum;
    this._substraction;
    this._multiplication;
    this._division;
    this._array;
  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  set sum(array) {
    this._sum = this._array[0] + this._array[1];
  }
  get sum() {
    return this._sum;
  }
  set substraction(array) {
    this._substraction = this._array[0] - this._array[1];
  }
  get substraction() {
    return this._substraction;
  }
  set multiplication(array) {
    this._multiplication = this._array[0] * this._array[1];
  }
  get multiplication() {
    return this._multiplication;
  }
  set division(array) {
    this._division = this._array[0] / this._array[1];
  }
  get division() {
    return this._division;
  }

}
var inicial = new number ();
do {
  var option = Number(prompt("1. Make a sum \n\
2. Perform a subtraction \n\
3. Perform a multiplication \n\
4. Make a division \n\
0. Quit the program"));
  switch (option){
    case 1:
      var num1=Number(prompt("Enter a number:"));
      var num2=Number(prompt("Enter a number:"));
      var array=[num1,num2];
      inicial.array=array;
      inicial.sum=inicial.array;
      console.log("The sum is: " + inicial.sum);
      break;
    case 2: 
     var num3 = Number (prompt("Enter a number"));
      var num4= Number (prompt("Enter a number"));
      var array = [num3, num4];
      inicial.array = array;
      inicial.substraction = inicial.array;
      console.log("The substraction is: " + inicial.substraction);
      break;
    case 3:
      var num5 = Number (prompt("Enter a number "));
      var num6 = Number (prompt("Enter a number "));
      var array = [num5, num6];
      inicial.array = array;
      inicial.multiplication = inicial.array;
      console.log("The multiplication is : " + inicial.multiplication);
      break;
    case 4: 
      var num7 = Number (prompt("Enter a number "));
      var num8 = Number (prompt("Enter a number "));
     var array = [num7, num8];
      inicial.array = array;
      inicial.division = inicial.array;
      console.log("The division between numbers is: " + inicial.division);
      break;
    case 0:
      alert("Thanks for using our program");
      break;
  }
  
}while (option!==0)
