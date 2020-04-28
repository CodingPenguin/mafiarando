/*var btn = document.getElementById("sub");
var nameInput = document.getElementById("nam");
var nameList = document.getElementById("nameList");

console.log("hie");

function printList() {
    let urmum = nameInput.value;
    let nameItem = document.createElement('li');
    nameItem.appendChild(document.createTextNode(urmum));
    nameList.appendChild(nameItem);
}*/

//if(btn) {
//  btn.addEventListener("click", printList, false);
//}
var roles = ["mafia", "detective", "nurse"];

var names = [];

window.onload = function() {
  var inputNum = document.getElementById("number");
  var inputName = document.getElementById("name");
  inputNum.addEventListener("keyup", enter(event));
  inputName.addEventListener("keyup", enter(event));

  var numBtn = document.getElementById("numBtn");
  var nameBtn = document.getElementById("nameBtn");

  numBtn.addEventListener("click", numPpl);
  nameBtn.addEventListener("click", addNames);
}

function enter(e) {
  if(event.keycode === 13) {
    event.preventDefault();
    document.getElementById("numBtn").click();
    console.log("it worked!");
  }
  console.log("wassup");
}



function numPpl() {
  return document.getElementById("number").value;
}

function addNames() {

    var ul = document.getElementById('listitems');
    var li = document.createElement('li');
    var name = document.getElementById('name');
    li.appendChild(document.createTextNode(name.value));
    ul.appendChild(li);
    li.setAttribute("id", name.value);

    names.push(name.value);



}

var count = 0;
var roleCount = 0;

function assignRoles() {
      var person = {name: "", role: ""};
      let rando = Math.round(Math.random()*(numPpl()-count));
      if(rando == names.length) {
        rando--;
      }
      person.name = names[rando];
      count++;

      const indexOfName = names.indexOf(person.name);
      names.splice(indexOfName, 1);
      console.log(names);
      console.log(rando);
      if(roles.length > 0) {
        person.role = roles[roleCount];
        roleCount++;
      } else {
        person.role = "innocent";
      }
/*      if(roles.length > 1) {
        person.role = roles[Math.round(Math.random()*roles.length)];
      } else if (roles.length == 1) {
        person.role = roles[0];
      } else {
        person.role = "innocent";
      }*/

      if(person.role == undefined) {
        person.role = "detective";
      }

      console.log(person.name + " " + person.role);

      const indexOfRole =  roles.indexOf(person.role);
      roles.splice(indexOfRole, 1);

      displayRoles(person.name, person.role);

}

function displayRoles(name, role) {
  if(role == "innocent") {
    document.getElementById(name).textContent = name + " is an " + role + ".";
  } else {
    document.getElementById(name).textContent = name + " is the " + role + ".";
  }
}
