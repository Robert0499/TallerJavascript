var Configuracion, gestion, seguir, configure, menu1, leng, continua, Continue1, manage;
var menu = 1;
//let i = 0, j = 0;
var name, SalaMin, rete, porcrete, aux, cuaaux, hourl, array = [], AddTool = {};
var company, wage, Wasocur, retention, many, auxTras, hoursMon, arrayEnglish = [];

function option() {
  do {
    var menu = parseInt(prompt("Configuracion del software de la nomina \n\
Selecciona una opcion: \n\
1. Seleccione el lenguaje \n\
2. Configuracion \n\
3. Continuar \n\
0. Salir del programa"));
    switch (menu) {
      case 1:
        lenguaje();
        break;
      case 2:
        configuracion();
        break;
      case 3:
        continuar();
        break;

      case 0:
        break;

    }
  } while (menu !== 0)
  return menu;
}
function option1() {
  do {
    var menu1 = parseInt(prompt("payroll software configuration \n\
Select an option\n\
1. Select the lenguage \n\
2. Configuration \n\
3. Continue\n\
4. Back  \n\
0. Quit the program\n\ "));
    switch (menu1) {

      case 1:
        lenguaje();
        break;
      case 2:
        configuration();
        break;
      case 3:
        Continue();
        break;
      case 4:
        option();
        break;

      case 0:
        break;


    }
  } while (menu1 !== 0)
  return menu1;
}



function lenguaje() {
  do {
    var leng = parseInt(prompt("0. Español \n\
1. Ingles"));
    switch (leng) {
      case 0:
        option();
        break;
      case 1:
        option1();
        break;


    }



  } while (leng !== 0)
  return leng;
}

function configuracion() {
  do {
    var Configuracion = parseInt(prompt("Configuración del software de la nómina:\n\
 Seleccione una opcion \n\
1. Nombre de la empresa \n\
2. Salario minimo \n\
3. Apartitr de cuantos salarios minimos  se cobra retencion en la fuente\n\
4. Porcentaje de retencion en la fuente \n\
5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de trasnporte \n\
6. Cuanto es el auxilio de trasnporte \n\
7. Cantidad de horas laboradas al mes \n\
8. Volver \n\
0. Salir del programa"));

    switch (Configuracion) {
      case 1:
        name = prompt(" Ingrese el nombre de la empresa");
        break;
      case 2:
        SalaMin = Number(prompt(" Ingrese el salario minimo "));
        break;
      case 3:
        rete = Number(prompt("Ingrese a partir de cuantos salarios minimos se deba hacer retencion a la fuente"));
        break;
      case 4:
        porcrete = Number(prompt("Ingrese el porcentaje de retencion en la fuente"));
        break;
      case 5:
        aux = Number(prompt("Ingrese hasta cuantos salarios minimos se debe otorgar el auxilio de transporte"));
        break;
      case 6:
        cuaaux = Number(prompt("Ingrese cuanto es el auxilio de transporte"));
        break;
      case 7:
        hourl = Number(prompt("Ingrese la cantidad de horas laborables al mes"));
        break;
      case 8:
        option();
        Configuracion = 0;
        false;

      case 0:
        break;


    }
    if (Configuracion === 1) {
      array.push({name});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 2) {
      array.push({SalaMin});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 3) {
      array.push({rete});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 4) {
      array.push({porcrete});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 5) {
      array.push({aux});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 6) {
      array.push({cuaaux});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }
    if (Configuracion === 7) {
      array.push({hourl});
      localStorage.setItem(`AddTool`, JSON.stringify(array));
    }

  } while (Configuracion !== 0)
  return array;

}

function configuration() {
  do {
    var configure = parseInt(prompt("Payroll software configuration: \n\
Select an option: \n\
1. Name of the company \n\
2. Minimum wage \n\
3. Apartitr of how many minimum wages is retained in the source \n\
4. Percentage of withholding at source \n\
5. Up to how many minimum wages are needed to pay for transportation assistance \n\
6. How much is the transportation aid \n\
7. Number of hours worked per month \n\
8. Back \n\
"));
    switch (configure) {
      case 1:
        company = prompt("Enter the name of the company");
        break;
      case 2:
        wage = Number(prompt("Enter the minimum wage"));
        break;
      case 3:
        Wasocur = Number(prompt("Enter from how many minimum wages you must make withhold to the source"));
        break;
      case 4:
        retention = Number(prompt("Enter the percentage of retention in the source"));
        break;
      case 5:
        many = Number(prompt("Enter up to how many minimum wages the transport aid must be granted"));
        break;
      case 6:
        auxTras = Number(prompt("Enter the amount of the transportation aid"));
        break;
      case 7:
        hoursMon = Number(prompt("Enter the number of working hours per month"));
        break;
      case 8:
        option1();
        break;


    }


    if (configure === 1) {
      arrayEnglish.push({company});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 2) {
      arrayEnglish.push({wage});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 3) {
      arrayEnglish.push({Wasocur});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 4) {
      arrayEnglish.push({retention});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 5) {
      arrayEnglish.push({many});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 6) {
      arrayEnglish.push({auxTras});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }
    if (configure === 7) {
      arrayEnglish.push({hoursMon});
      localStorage.setItem(`AddTool`, JSON.stringify(arrayEnglish));
    }

  } while (configure !== 0)
  return configure;
}
function continuar() {
  do {
    var continua = parseInt(prompt("Software de la nomina \n\
Seleccione una opcion \n\
1. Gestion de empleados \n\
2. Registrar horas laboradas \n\
3. Generar nomina \n\
4. Imprimir comprobante de pago \n\
5. Volver \n\
0. Salir del programa"));
    switch (continua) {
      case 1:
        gestionEm();
        break;
      case 2:
        horas();
        break;
      case 3:
        empC();
        break;
      case 4:
        pago();
        break;
    }
  } while (continua !== 0)
  return continua;
}

function Continue() {
  do {
    var Continue1 = parseInt(prompt("payroll software Select an option \n\
1. Management of employees \n\
2. Record hours worked \n\
3. Generate payroll \n\
4. Print proof of payment \n\
5. Back \n\
0. Quit the program"));
    switch (Continue1) {
      case 1:
        manag();
        break;
    }
  } while (Continue1 !== 0)
  return Continue1;
}
function gestionEm() {
  var array = JSON.parse(localStorage.getItem(`AddTool`));
  var empleado = [];
  var cedula, nombre, apellido, salario, cargo, salario1;

  do {
    empleado = JSON.parse(localStorage.getItem(`empleado`));
    if (empleado === null) {
      empleado = [];
    }
    var gestion = Number(prompt("Software de la nomina\n\
 Gestion de empleados \n\
Seleccion una opcion:\n\
1. Agregar \n\
2. Modificar \n\
3. Elminar \n\
4. Volver \n\
0. Salir del programa"));
    switch (gestion) {
      case 1:
        nombre = prompt("Ingrese el nombre del empleado");
        apellido = prompt("Ingrese el apellido del empleado");
        cedula = parseInt(prompt("Ingrese el numero de cedula del empleado"));
        if (empleado === null) {
          for (i = 0; i < empleado.length; i++) {
            if (empleado[i].cedula === cedula) {
              alert("La cedula ingresada ya se encuentra registrada, por favor ingrese otra!");
              cedula = parseInt(prompt("Ingrese la nueva cedula"));
            }

          }
        }
        cargo = prompt("Ingrese el cargo del empleado");
        salario = prompt("Ingrese el salario del empleado");
        if (salario < array[1].SalaMin) {
          alert("Usted ha ingresado un valor menor al salario minimo ya configurado, por favor ingrese un valor mayor!");
          salario = Number(prompt("Ingrese de nuevo el salario"));

        }
        if (localStorage.getItem(`empleado`) === null) {
          empleado.push({nombre, apellido, cedula, cargo, salario, salario1});
          localStorage.setItem(`empleado`, JSON.stringify(empleado));
        } else {
          var pro = JSON.parse(localStorage.getItem(`empleado`));
          pro.push({nombre, apellido, cedula, cargo, salario, salario1});
          localStorage.setItem(`empleado`, JSON.stringify(pro));
        }

        break;

      case 2:
        var objeto = "";
        var conta = 0;
        var modifica = Number(prompt("Ingrese el numero de cedula del empleado que desea modificar"));
        for (i = 0; i < empleado.length; i++) {
          if (empleado[i].cedula === modifica) {
            conta++;
            var p = i;
            objeto = empleado[p];
          }
        }
        if (conta === 1) {
          console.log(objeto);
          var cual = Number(prompt("Que desea modificar ? \n\
1. Nombre \n\
2. Apellido \n\
3. Cedula \n\
4. Cargo  "));



          switch (cual) {
            case 1:
              empleado[p].nombre = (prompt("Ingrese el nuevo nombre"));
              break;
            case 2:
              empleado[p].apellido = (prompt("Ingrese el nuevo apellido"));
              break;
            case 3:
              empleado[p].cedula = Number("Ingrese la nueva cedula");
              break;
            case 4:
              empleado[p].cargo = ("Ingrese el nuevo cargo");
              break;
            default:
              alert("Ingreso una opcion invalidad 1-4");
              break;

          }
          localStorage.setItem(`empleado`, JSON.stringify(empleado));
        } else {
          alert("El numero de cedula que ingreso no es correcto");
        }
        break;
      case 3:
        var object = "";
        var cont = 0;
        var delet = Number(prompt("Ingrese el numero de la cedula del empleado que desea eliminar"));
        for (var i = 0; i < empleado.length; i++) {
          if (empleado[i].cedula === delet) {
            cont++;
            p = i;
            object = empleado[p];
          }
        }
        if (cont === 1) {
          console.log(object);
          var next = confirm("Desea eliminar al empelado " + empleado[p].nombre + " Con cedula numero: " + empleado[p].cedula);
          if (next) {
            empleado[p] = empleado[0];
            empleado[0] = object;

            empleado.shift();
            alert("El empleado fue eliminado con exito");
            //delete aemploye[x];
            localStorage.setItem(`empleado`, JSON.stringify(empleado));
          }
        } else {
          alert("El numero de cedula ingresado no es correcto");
        }
        break;

      case 4:
        continuar();
        gestion = 0;
        break;
      case 0:
        gestion = 0;
        alert("Gracias por usar el programa!");
        localStorage.setItem("salir", JSON.stringify(empleado));

    }

  } while (gestion !== 0)
  return empleado;
}

function manag() {
  var manage = parseInt(prompt("Payroll Software\n\
 Employee management \n\
Select an option: \n\
1. Add \n\
2. Modify \n\
3. Delete \n\
4. Back  \n\
0. Quit the program"));
  return manage;
}
function horas() {

  var conta = 0;
  var cont = 0;
  var array = JSON.parse(localStorage.getItem(`AddTool`));
  var empleado = JSON.parse(localStorage.getItem(`empleado`));
  var regisH = Number(prompt("Ingrese el numero de cedula del empleado al cual le desea registrar las horas"));
  var regHH = [];
  regHH = JSON.parse(localStorage.getItem("Registar horas"));
  if (regHH === null) {
    regHH = [];
  }
  for (var i = 0; i <= empleado.length - 1; i++) {
    if (regisH === empleado[i].cedula) {
      var p = i;
      conta++;
      var objeto = empleado[p];
    }

  }
  if (conta === 1) {
    console.log(objeto);
    valhour = empleado[p].salario / array[6].hourl;
    var ID = regisH;
    var conta = 1;
    var horaD = Number(prompt("Ingrese el numero de horas diurnas"));
    var horaNoche = Number(prompt("Ingrese el numero de horas nocturnas"));
    var horaDomin = Number(prompt("Ingrese el numero de horas dominicales diurnas"));
    var horaDomiN = Number(prompt("Ingrese el numero de horas dominicales nocturnas"));
    var horaExtD = Number(prompt("Ingrese el numero de horas extras diurnas"));
    var horaExtN = Number(prompt("Ingrese el numero de horas extras nocturnas"));
    var horaExtDomi = Number(prompt("Ingrese el numero de horas extras dominicales diurnas"));
    var horaExtNoct = Number(prompt("Ingrese el numero de horas extras dominicales nocturnas"));
    if (localStorage.getItem("Registar horas") === null) {
      regHH.push({horaD, horaNoche, horaDomin, horaDomiN, horaExtD, horaExtN, horaExtDomi, horaExtNoct, ID, valhour});
      localStorage.setItem("Registrar horas", JSON.stringify(regHH));
      console.log(regHH);
    } else {
      for (var i = 0; i < regHH.length; i++) {
        if (ID === regHH[i].ID) {
          conta++;
          var objectt = regHH[i];
          var j = i;
        }
      }
      console.log(conta);
      if (conta === 0) {
        var temp = JSON.parse(localStorage.getItem("Registrar horas"));
        temp.push({horaD, horaNoche, horaDomin, horaDomiN, horaExtD, horaExtN, horaExtDomi, horaExtNoct, ID, valhour});
        localStorage.setItem("Registrar horas", JSON.stringify(temp));
        console.log(temp);
      } else if (conta !== 0) {
        regHH[j] = {horaD, horaNoche, horaDomin, horaDomiN, horaExtD, horaExtN, horaExtDomi, horaExtNoct, ID, valhour};
        localStorage.setItem("Registrar horas", JSON.stringify(regHH));

      }
    }

  } else {
    alert("El numero de cedula no esta registrado");
  }
  return empleado;
}
function empC() {
  console.log(` -- Cedula -- Cargo -- Total A Pagar --`);
  var c = 0;
  var g = 0;
  var ValorhoraD = 0;
  var ValorhoraNoche = 0;
  var ValorhoraDomin = 0;
  var ValorhoraDomiN = 0;
  var ValorhoraExtD = 0;
  var ValorhoraExtN = 0;
  var ValorhoraExtDomi = 0;
  var ValorhoraExtNoct = 0;
  var SalarioPT = 0;
  var regHH = JSON.parse(localStorage.getItem("Registrar horas"));
  var array = JSON.parse(localStorage.getItem(`AddTool`));
  var empleado = JSON.parse(localStorage.getItem(`empleado`));
  console.log(regHH);
  for (var i = 0; i < empleado.length; i++) {
    for (var j = 0; j < regHH.length; j++) {
      if (empleado[i].cedula === regHH[j].ID) {

        ValorhoraD = (regHH[j].valhour * 1);
        ValorhoraNoche = (regHH[j].valhour * 1.35);
        ValorhoraDomin = (regHH[j].valhour * 1.75);
        ValorhoraDomiN = (regHH[j].valhour * 1.10);
        ValorhoraExtD = (regHH[j].valhour * 1.25);
        ValorhoraExtN = (regHH[j].valhour * 1.75);
        ValorhoraExtDomi = (regHH[j].valhour * 2);
        ValorhoraExtNoct = (regHH[j].valhour * 2.50);
        SalarioPT = ((ValorhoraD * regHH[j].horaD) + (ValorhoraNoche * regHH[j].horaNoche) + (ValorhoraDomin * regHH[j].horaDomin) + (ValorhoraDomiN * regHH[j].horaDomiN) + (ValorhoraExtD * regHH[j].horaExtD) + (ValorhoraExtN * regHH[j].horaExtN) + (ValorhoraExtDomi * regHH[j].horaExtDomi) + (ValorhoraExtNoct * regHH[j].horaExtNoct));
        if ((empleado[i].salario <= (array[4].aux) * array[1].SalaMin) && (SalarioPT <= (array[4].aux) * array[1].SalaMin)) {
          empleado[i].salario1 = SalarioPT + array[5].cuaaux;
        }
        if ((empleado[i].salario >= (array[2].rete) * array[1].SalaMin) && (SalarioPT >= (array[2].rete) * array[1].SalaMin)) {
          empleado[i].salario1 = SalarioPT - ((array[3].porcrete / 100) * SalarioPT);
        }
        if ((empleado[i].salario <= array[1].SalaMIn) && SalarioPT <= array[1].SalaMin) {
          empleado[i].salario1 = SalarioPT + (array[1].SalaMin * 0.20) + (array[5].cuaaux);
        }
        if ((empleado[i].salaio > (array[4].aux) * array[1].SalaMin) && (SalarioPT < (array[2].rete) * array[1].SalaMIn)) {
          empleado[i].salario1 = SalarioPT;
        }
        localStorage.setItem(`empleado`, JSON.stringify(empleado));

      }

    }

  }
  var fecha = prompt("Ingrese la fecha actual: ");
  localStorage.setItem("fecha", JSON.stringify(fecha));
  console.log(fecha);
  empleado.forEach((e) => {

    console.log(`${e.cedula} -- ${e.cargo} -- $${SalarioPT}`);
  });
  return empC;
}
function pago() {
  let empleado = JSON.parse(localStorage.getItem('empleado'));
  var option = JSON.parse(localStorage.getItem('option'));
  var nomina = JSON.parse(localStorage.getItem('nomina'));

  if (empleado === null) {
    alert('No hay empleados registrados');

  } else {
    if (nomina === null) {
      alert('Debe primero generar la nomina de su empresa');

    }
    let find = parseInt(prompt('Digite la cedula para el comprobante de pago?'));
    var tmp = 0;
    var name = '';
    var cargo = '';
    var salario1 = 0;
    empleado.forEach((e) => {
      
      if (e.cedula === find) {
        tmp++;
        name = e.nombre;
        cargo = e.cargo;
       name = e.name;


        let pague = JSON.parse(localStorage.getItem('empleado'));
        pague.forEach((j) => {
          if (e.cedula === j.cedula) {
            salario1 = j.SalarioPT;
          }
        });
      }
    

    });
    if (tmp === 0) {
      alert('El empleado no se encuentra registrado en la base de datos');

    } else {
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`);
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`);
      console.log(`♦♦          ${name} || ${cargo} ♦♦`);
      console.log(`♦♦         Recibi de:  ${name}       ♦♦`);
      console.log(`♦♦ Recibi una suma total de:  ${salario1}♦♦`);
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`);
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`);

    }
  }
  return empleado;
}
//Inicio
var h = option();
