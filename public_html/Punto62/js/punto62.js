function sumar(num1, num2) {
  var result = num1 + num2;
  return result;
}

function restar(num1, num2) {
  var result = num1 - num2;
  return result;
}

function multiplicar(num1, num2) {
  var result = num1 * num2;
  return result;
}

function dividir(num1, num2) {
  var result = num1 / num2;
  return result;
}

$(() => {

  $("#sum").click(() => {
    $("#opp").animate({
      'margin-left': '-2500px'
    }, 2000);
    $("#form__input").animate({
      'position': 'relative',
      'margin-left': '-2vw'
    }, 2000);



    $("#result").click(() => {
      num1 = Number($("#numero1").val());
      num2 = Number($("#numero2").val());
      result = sumar(num1, num2);
      $("#resultado").html("The result is: " + result);
      $("#Mymodal").modal("show");
    });

  });


  $("#Cerrar").click(() => {
    $("#Mymodal").modal("hide");
  });

  $("#atras").click(() => {
    $("#opp").animate({
      'margin-left': '0vw'
    }, 2000);
    $("#form__input").animate({
      'position': 'relative',
      'margin-left': '110vw'
    }, 2000, );
  });

  $("#rest").click(() => {
    $("#opp").animate({
      'margin-left': '-2500px'
    }, 2000);
    $("#form__input").animate({
      'position': 'relative',
      'margin-left': '-2vw'
    }, 2000);


    $("#result").click(() => {
      num1 = Number($("#numero1").val());
      num2 = Number($("#numero2").val());
      result = restar(num1, num2);
      $("#resultado").html("The result is: " + result);
      $("#Mymodal").modal("show");
    });

  });

  $("#mult").click(() => {
    $("#opp").animate({
      'margin-left': '-2500px'
    }, 2000);
    $("#form__input").animate({
      'position': 'relative',
      'margin-left': '-2vw'
    }, 2000);

    $("#result").click(() => {
      num1 = Number($("#numero1").val());
      num2 = Number($("#numero2").val());
      result = multiplicar(num1, num2);
      $("#resultado").html("The result is:  " + result);
      $("#Mymodal").modal("show");
    });

  });

  $("#div").click(() => {
    $("#opp").animate({
      'margin-left': '-2500px'
    }, 2000);
    $("#form__input").animate({
      'position': 'relative',
      'margin-left': '-2vw'
    }, 2000);
    $("#result").click(() => {
      num1 = Number($("#numero1").val());
      num2 = Number($("#numero2").val());
      result = dividir(num1, num2);
      $("#resultado").html("The result is: " + result);
      $("#Mymodal").modal("show");
    });
  });



});
