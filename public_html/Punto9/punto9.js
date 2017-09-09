var NUM = Number(prompt(" Enter the number to know if it is cousin "));
//NUM0 = Number(NUM);
numeroPrimo = true;
for (i = 1; i < NUM; i++){
  if (NUM / i === Math.round(NUM / i) && i !== 1 && i !== NUM) {
    numeroPrimo = false;
    break;

  }
  ;
}
;
if (numeroPrimo)
  console.log(`The number  ${NUM} is cousin`);
else
  console.log("The number " + NUM + " not is cousin");