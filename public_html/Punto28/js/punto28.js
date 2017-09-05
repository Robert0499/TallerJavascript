var i = 0;
var menu = 1;
var arrangement = [];
var size;
function option() {
  var menu = parseInt(prompt("1. Fill arrangement \n\
2. Find element by sequential search method \n\
3. Apply bubble sorting method \n\
4. Apply bidirectional bubble sorting method\n\
5. Apply insertion sort method \n\
6. Apply method of ordering by mixing\n\
7. Apply the ordering method by selection \n\
8. Print Arrangement \n\
0. Quit the program"));
  return menu; 
}


function fillArrangement() {
  var tam = parseInt(prompt('Write the size of the arrangement'));
  for ( i = 0; i < tam; i++) {
    arrangement[i] = Math.round(Math.random() * 100);
  }
  return tam;
}
function search() {
  var info = '';
  var bad = '';
  var array = 0;
  if (arrangement.length !== 0) {
    var find = parseInt(prompt('Type the item you want to find?'));
    var cont = 0;
    for ( array of arrangement) {
      if (array === find) {
        cont++;
        info = `Item has been found: ${cont} times`;
      } else {
        bad = 'The element has not been found inside the array';
      }
    }
    console.log(cont === 0 ? bad : info);
    
  } else {
    alert('The arrangement is empty');
   
  }
  return array;
}



while (menu !== 0) {
  menu = option();
  switch (menu) {
    case 1:
      tam = fillArrangement();
      break;
    case 2:
      find = search;
      break;
      
  }
  }
  console.log(arrangement);
  