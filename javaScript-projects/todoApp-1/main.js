const addButton = document.querySelector(".addButton");
var inputValue = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    //create the item div
    this.createDiv(itemName);
  }
  createDive(itemName) {
    //creat the div
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    // creat the tag inside the div
    let input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = itemName;
    input.classList.add("item_input");

    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "Edit";

    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "Remove";

    // send the tags inside the container class
    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
  }
}

new item("sport");
