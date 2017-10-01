class info {
  constructor() {
    this._array;
    this._add;
    this._searchN;
    this._searchC;
  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  set add(add) {
    this._add = add;
  }
  get add() {
    return this._add;
  }
  set searchN(searchN) {
    this._searchN = searchN;
  }
  get searchN() {
    return this._searchN;
  }
  set searchC(searchC) {
    this._searchC = searchC;
  }
  get searchC() {
    return this._searchC;
  }

}
var i;
var AddTool = {};
var array = [i];
var h = new info;
do {
  var menu = Number(prompt("1. Add new tool \n\
2. Search by name\n\
3. Search by code \n\
0. Quit the program"));
  switch (menu) {
    case 1:
      name = (prompt("Enter the name of the tool "));
      code = (prompt("Enter tool code "));
      AddTool = {
        name,
        code
      };
      if (array === null) {
        array = [
          AddTool = {
            name,
            code
          }
        ];
      } else {
        array.push(AddTool);
      }
      console.log(typeof (array));
      localStorage.setItem(`AddTool`, JSON.stringify(array));
      var n = JSON.parse(localStorage.getItem(`AddTool`));
      h._add = array;
      break;
    case 2:
      name1 = (prompt("Enter the name of the tool to be searched"));
      if (name1 === name) {
        alert("El producto ya esta registrado con el codigo : " + AddTool.code);
      } else
        alert("El producto aun no esta registrado ");
      array = [
        AddTool = {
          name
        }
      ];
      h._searchN = array;
      console.log(array);
      console.log(AddTool);
      break;
    case 3:
      code1 = (prompt("Enter the code of the tool to be searched"));
      if (code1 === code) {
        alert("El producto esta registrado como: " + AddTool.name);
      } else
        ("¡EL producto aun no esta registrado!");
      array = [
        AddTool = {
          code
        }

      ];


      array = JSON.parse(localStorage.getItem('AddTool'));
      h._searchC = array;
      console.log(array);
      console.log(AddTool);
      break;
    case 0:
      alert("Thanks for using or program");

  }
} while (menu !== 0);