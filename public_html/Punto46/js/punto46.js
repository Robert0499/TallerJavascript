function prin(){
var a = $("#num").val();
b =Number(a);
$("#resul2").text(b % 2 === 0 ? "It is an even number" : "It is an odd number");
}