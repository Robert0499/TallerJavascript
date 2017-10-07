function fecha(){
function Tfecha(f1, f2) {
    if (f1.getTime() > f2.getTime()) {
        var di = f1.getTime() - f2.getTime();
    } else
        (f2.getTime() < f2.getTime());
    var di = f2.getTime() - f1.getTime();

    var rsp = [];
    rsp[0] = Math.floor(di / (1000 * 60 * 60 * 24));
    rsp[1] = Math.floor(di / (1000 * 60 * 60 * (24 * 30)));
    rsp[2] = Math.floor(di / (1000 * 60 * 60 * (24 * 365)));
    
    return rsp;
    }

    var a = new Date($("#fecha1").val());
    var b = new Date($("#fecha2").val());

    var rsp = Tfecha(a, b);

    
    $("#resul").html("The difference in days is: " + rsp[0] + "<br>" + " The difference in months is: " + rsp[1] + "<br>" + "The difference in years is: " + rsp[2]);


}



