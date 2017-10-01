class number {
  constructor() {

    this._array;
    this._menu;
    this._size;
    this._search;
    this._buble;
    this._bidirec;
    this._insertion;
    this._selection;
    this._mixture;

  }

  set array(array) {
    this._array = array;

  }
  get array() {
    return this._array;

  }
  set menu(menu) {
    this._menu = menu;
  }
  get menu() {
    return this._menu;
  }
  set size(size) {
    this._size = size;
  }
  get size() {
    return this._size;
  }
  set search(search) {
    this._search = search;
  }
  get search() {
    return this._search;
  }
  set buble(buble) {
    this._buble = buble;
  }
  get buble() {
    return this._buble;
  }
  set bidirec(bidirec) {
    this._bidirec = bidirec;
  }
  get bidirec() {
    return this._bidirec;
  }
  set insertion(insertion) {
    this._insertion = insertion;
  }
  get insertion() {
    return this._insertion;
  }
  set selection(selection) {
    this._selection = selection;
  }
  get selection() {
    return this._selection;
  }
  set mixture(mixture) {
    this._mixture = mixture;
  }
  get mixture() {
    return this._mixture;
  }
}
var i = 0;
var array = [];
var h = new number();
do {
  var option = Number(prompt("1. Fill arrangement \n\
2. Find element by sequential search method \n\
3. Apply bubble sorting method \n\
4. Apply bidirectional bubble sorting method\n\
5. Apply insertion sort method \n\
6. Apply method of ordering by mixing\n\
7. Apply the ordering method by selection \n\
8. Print Arrangement \n\
0. Quit the program"));



  switch (option) {
    case 1:
      var tam = parseInt(prompt('Write the size of the arrangement'));
      for (i = 0; i < tam; i++) {
        array.push(Math.round(Math.random() * 100));
      }
      h.array = array;

      break;
    case 2:
      tam = secuec;
      var tmp = false;
      var secuec = parseInt(prompt("Enter value to search"));
      array.forEach((e, i) => {
        if (e === secuec) {
          console.log("The entered value is in the position " + i);
        } else {
          tmp = true;
        }

      });
      break;
    case 3:
      var bad;
      var tam = bad;
      var bad = false;
      while (!bad) {
        bad = true;
        for (var i = 0; i < array[i]; i++) {
          if (array[i] > array[ i + 1]) {
            aux = array[ i + 1];
            array [i + 1] = array[i];
            array [i] = aux;
            bad = false;

          }


        }

      }
      console.log("the bubble order would be: ");
      console.log(array);
      h.buble = array;
      break;
    case 4:
      var tam = k;
      var k;
      for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
          if (array[j] < array[i]) {
            k = array[i];
            array[i] = array[j];
            array[j] = k;
          }

        }
      }
      console.log("the bidirectional order would be: ");
      console.log(array);
      h._bidirec = array;
      break;

    case 5:
      var tam = ise;
      var ise;
      for (i = 1; i < array.length; i++) {
        var j = i;
        var temp = array[i];
        while (j > 0 && array[ j - 1 ] > temp) {
          array[ j ] = array[ j - 1 ];
          j--;
        }
        array[ j ] = temp;
      }
      console.log("The insertion order would be: ");
      console.log(array);
      h.insertion = array;

      break;
    case 6:
      mix = mixturee();
      function mixturee() {
        var tam = mix;
        var mix;
        const mergeSort = array;
        if (array.length < 2) {
          return array;
        }

        const middle = parseInt(array.length / 2) | 0;
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        const merge = (left, right) => {
          const result = [];
          var il = ir = 0;

          while (il < left.length && ir < right.length) {
            result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
          }
          return [...result, ...left.slice(il), ...right.slice(ir)];

        };
        return mix;
      }
      console.log("The ordering by mixing is: ");
      console.log(array);
      h._mixture = array;
      break;
    case 7:
      var tam = selec;
      var selec;
      for (i = 0; i < array.length; i++) {
        var i = iMin = j;
        for (++i; i < array.lenht; ++i) {
          (array[ i ] < array[ iMin ]) && (iMin = i);
        }
        [array[ j ], array[ iMin ]] = [array[ iMin ], array[ j ]];


      }
      console.log("The selection order would be: ");
      console.log(array);
      h._selection = array;

      break;

    case 8:
      console.log(array);
      break;

  }

} while (option !== 0);