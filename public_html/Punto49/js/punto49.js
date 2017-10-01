function prin() {
  var esp = "----";
  var ast = "*";
  var w = "";
  var x = "";
  var s = "-";
  for (i = 1; i <= 13; i++) {
    if (i === 1) {
      $("#iniciar").append(w = esp + ast, "<br>");
    }
    if (i >= 2 && i <= 4) {
      if (i === 3) {
        x = w;
      }
      $("#iniciar").append(w = w.slice(1) + ast + ast, "<br>");
    }
    if (i === 5) {
      $("#iniciar").append(x, "<br>");
    }
    if (i === 6) {
      $("#iniciar").append(x, "<br>");
    }
    if (i >= 7 && i <= 9) {
      $("#iniciar").append(x = x.slice(1) + ast + ast, "<br>");
    }
    if (i > 9) {
      $("#iniciar").append(x = s + x.slice(0, -2), "<br>");
    }
  }
}