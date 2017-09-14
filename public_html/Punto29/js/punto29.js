var n;
var c;
let i = 0;
let one;
var menu = 1;
var AddTool = {};
var nameSearch = {};
var codeSearch = {};
var array = [i];
function tool() {
    var menu = parseInt(prompt("1. Add new tool \n\
2. Search by name\n\
3. Search by code \n\
0. Quit the program"));
    return menu;
}

function Add() {


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
//    console.log(one[0].c);




    return AddTool;
}

function SearchName() {

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

}
function SearchCode() {
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

}

while (menu !== 0) {
    menu = tool();
    switch (menu) {

        case 1:
            AddTool = Add();
//           

            break;
        case 2:
            nameSearch = SearchName();
            console.log(array);
            break;
        case 3:
            codeSearch = SearchCode();
            console.log(array);
            break;
        case 0:
            alert("GoodBye, Thanks for using the program");
    }


}