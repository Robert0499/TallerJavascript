function pri (){
    var a = Number($("#bir").val());
    var b = Number($("#resul1").val());
    var c = Number($("#result2").val());
    var resut = Number((b*c/a));
    $("#resul").text("The result is: " + resut);
}