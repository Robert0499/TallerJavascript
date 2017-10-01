var i = 0;
var menu = 1;
var arrangement = [];
var size;
var array;
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
  for (i = 0; i < tam; i++) {
    arrangement[i] = Math.round(Math.random() * 100);
  }
  return tam;
}
function search() {
  tam = secuec;
  var tmp = false;
  var secuec = parseInt(prompt("Enter value to search"));
  arrangement.forEach((e, i) => {
    if (e === secuec) {
      console.log("The entered value is in the position " + i);
    } else {
      tmp = true;
    }

  });
//    if (tmp) {
//        console.log("The value entered was not found ");
//    }

  return secuec;

}
var bad;
function buble() {
  var tam = bad;
  var bad = false;
  while (!bad) {
    bad = true;
    for (var i = 0; i < arrangement[i]; i++) {
      if (arrangement[i] > arrangement[ i + 1]) {
        aux = arrangement[ i + 1];
        arrangement [i + 1] = arrangement[i];
        arrangement [i] = aux;
        bad = false;

      }

    }
  }
  return bad;
}

function bidirec() {
  var tam = k;
  var k;
  for (i = 0; i < arrangement.length - 1; i++) {
    for (j = i + 1; j < arrangement.length; j++) {
      if (arrangement[j] < arrangement[i]) {
        k = arrangement[i];
        arrangement[i] = arrangement[j];
        arrangement[j] = k;
      }

    }
  }
  return k;
}

function isertion() {

  var tam = ise;
  var ise;
  for (i = 1; i < arrangement.length; i++) {
    var j = i;
    var temp = arrangement[i];
    while (j > 0 && arrangement[ j - 1 ] > temp) {
      arrangement[ j ] = arrangement[ j - 1 ];
      j--;
    }
    arrangement[ j ] = temp;
  }
  return ise;
}
;

function selection() {
  var tam = selec;
  var selec;
  for (i = 0; i < arrangement.length; i++) {
    var i = iMin = j;
    for (++i; i < arrangement.lenht; ++i) {
      (arrangement[ i ] < arrangement[ iMin ]) && (iMin = i);
    }
    [arrangement[ j ], arrangement[ iMin ]] = [arrangement[ iMin ], arrangement[ j ]];


  }
  return arrangement;

  return selec;
}

function mixture() {
  var tam = mix;
  var mix;
  const mergeSort = arrangement;
  if (arrangement.length < 2) {
    return arrangement;
  }
  const middle = parseInt(arrangement.length / 2) | 0;
  const left = arrangement.slice(0, middle);
  const right = arrangement.slice(middle);
  const merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
      result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
    }
    return [...result, ...left.slice(il), ...right.slice(ir)];

  };

  return mix;
}

while (menu !== 0) {
  menu = option();
  switch (menu) {
    case 1:
      tam = fillArrangement();

      break;
    case 2:
      secuec = search();
      break;
    case 3:
      bad = buble();
      console.log("the bubble order would be: ");
      console.log(arrangement);

      break;
    case 4:
      k = bidirec();
      console.log("the bidirectional order would be: ");
      console.log(arrangement);
      break;
    case 5:
      ise = isertion();
      console.log("The insertion order would be: ");
      console.log(arrangement);

      break;
    case 6:
      mix = mixture();
      console.log("The ordering by mixing is: ");
      console.log(arrangement);
      break;
    case 7:
      selec = selection();
      console.log("The selection order would be: ");
      console.log(arrangement);
      break;

    case 8:
      console.log(arrangement);
      break;
    case 0:
      alert(" Good Bye! ");
      break;

  }
}

