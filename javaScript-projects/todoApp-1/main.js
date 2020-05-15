const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");

if (window.localStorage.getItem("todos") == undefined) {
  var todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item {
  constructor(name) {
    //create the item div
    this.createItem(name);
  }
  createItem(name) {
    // * create a div
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    // * creat the tag inside the div
    var input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add("item_input");

    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", () => this.edit(input, name));

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => this.remove(itemBox, name));

    // * send the tags inside the container class
    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(edit);
    itemBox.appendChild(remove);
  }

  edit(input, name) {
    if (input.disabled == true) {
      input.disabled = !input.disabled;
    } else {
      input.disabled = !input.disabled;
      let indexof = todos.indexOf(name);
      todos[indexof] = input.value;
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  remove(itemBox, name) {
    itemBox.parentNode.removeChild(itemBox);
    let index = todos.indexOf(name);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }
}

add.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

function check() {
  if (inputValue.value != "") {
    new item(inputValue.value);
    todos.push(inputValue.value);
    windows.localStorage.setItem("todos", JSON.stringify(todos));
    inputValue.value = "";
  }
}

for (let v = 0; v < todos.length; v++) {
  new item(todos(v));
}

new item("sport");
