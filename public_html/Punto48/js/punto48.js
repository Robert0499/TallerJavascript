function prin() {
  var aste = "-----*";
  var max = 5;
  var x = 1;
  var r = "*";
  while (x <= max) {
    if (x === 1) {
      $("#iniciar").append(aste, "<br>");
    }
    $("#iniciar").append(aste = aste.slice(1) + r, "<br>");
    x++;
  }
}
