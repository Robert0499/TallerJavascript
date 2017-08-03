var NUM = prompt('Ingrese el numero para saber si es primo ');
NUM0 = Number(NUM);
numeroPrimo = true;
for (i = 1; i < NUM0; i++)
{
  if (NUM0 / i == Math.round(NUM0 / i) && i != 1 && i != NUM0) {
    numeroPrimo = false;
    break;

  }
  ;
}
;
if (numeroPrimo)
  console.log(`El numero  ${NUM0} es primo`);
else
  console.log("EL numero " + NUM0 + "   " + "no es primo");