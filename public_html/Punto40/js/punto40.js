function salve() {
  var nom = $("#name").val();
  var doc = $("#id").val();
  var num = Number($("#number").val());
  var gen = $("#gender").val();
  var liv = $("#live").val();
  var est = $("#alt").val();
  var print = ("Hello my Name Is " + nom + ", my type of document is " + doc + ", document number is " + num + ", i am of gender " + gen + " My height is: " + est  + " Cm" + " I live in Carthage " + liv);
  $('#segundo').text(print);
    

}
