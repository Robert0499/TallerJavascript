 function prin(){
 var aste= "*";
  var max= 6;
  var x= 1;
  var esp= "";
  do{
    esp = esp + aste;
    $("#iniciar").append(esp, "<br>");
    console.log(esp);
    x++;
  } while (x<= max);
 }