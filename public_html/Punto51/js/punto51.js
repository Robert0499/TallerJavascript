
function pri() {
    var a = Number($("#bir").val());
    var p = ("Welcome to party");
    var c = ("¡¡You are not allowed access!!");
    if (a >= 18) {
        $("#resul").text(p);
    } else if (a < 18) {
        $("#resul").text(c);

    }
}
   