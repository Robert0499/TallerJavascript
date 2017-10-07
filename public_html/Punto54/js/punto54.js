function pri(){
    var a = Number($("#bir").val());
    var b = Number($("#resul1").val());
    var per = Math.round(a/b);
    var be = Math.round(a-per);
    $("#resul").html("The percentage of retention is: " + per + "<br>" + " Yo will be paid: " + be);
}