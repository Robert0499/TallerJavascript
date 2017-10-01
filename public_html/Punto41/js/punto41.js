//$(document).ready(()=>{
//    $("#se").text((print));
//    
//    
//    
//    });

function prin (){
var name = $("#name").val();
var cc = ($("#id").val());
var num = Number($("#nu").val());
var print = ("Hello my name is: " + name + " My number the " + cc + " is: " + num );
$("#se").text(print);
console.log(print);
}