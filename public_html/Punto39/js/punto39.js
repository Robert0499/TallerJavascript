function imp() {
  var name = $("#enter").val();
  var print = ("Hi I am " + name + " and I'm happy to be learning JavaScript using jQuery");
  $("#text39").text(print);
  $('#send').attr('data-content', name);
  
}