function pri(){
    var a = Number($("#bir").val());
    var b = Number($("#resul1").val());
    var per = (a+b);
    var ar = (b*a);
    var c = ("The perimeter is: " + per + " The area is: " + ar);
    $("#resul").text(c);
  
}