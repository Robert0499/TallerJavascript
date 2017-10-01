$("#prin").on('click',() => {
var a = Number($("#num1").val());
var b = Number($("#num2").val());

  $('#asd').modal();
  var su = ("The sum of the two numbers is: " + (a + b));
  var re = ("The subtraction of the two numbers is: " + (a - b));
  var mul = ("The multiplication of the two numbers is: " + (a * b));
  var div = ("The division of the two numbers is: " + (a / b));
  $("#resul").html(su + "<br>" + re + "<br>" + mul + "<br>" + div); 
});