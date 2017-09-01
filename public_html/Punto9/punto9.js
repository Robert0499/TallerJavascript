var NUM = Number(prompt('Ingrese el numero para saber si es primo '));
//NUM0 = Number(NUM);
numeroPrimo = true;
for (i = 1; i < NUM; i++)
{
  if (NUM / i == Math.round(NUM / i) && i != 1 && i != NUM) {
    numeroPrimo = false;
    break;

  }
  ;
}
;
if (numeroPrimo)
  console.log(`El numero  ${NUM} es primo`);
else
  console.log("EL numero " + NUM + "   " + "no es primo");