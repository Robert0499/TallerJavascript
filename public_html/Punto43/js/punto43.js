function prin (){
    var a = $("#result1").val();
    var b = $("#result2").val();
    var resul = (a**b);
    $("#res").text(a + " to " + b + " is: " + resul);
    //
    var resul1 = Math.round(b**a);
    $("#res1").text(b + " to " + a + " is: " + resul1);
    var resul2 = (a * b);
    $("#res2").text("The multiplication between: " + a + " and " + b + " is: " + resul2);
    var resul3 = Math.round( a / b);
    $("#res3").text("The division between: " + a + " and " + b  + " is: " + resul3);
    var result = (b/a);
    $("#res4").text("The division between: " + b + " and " + a + " is: " + result);
    var result1 = ( a % b);
    $("#res5").text("The division module between: " + a + " and " + b + " is: " + result1);
}
