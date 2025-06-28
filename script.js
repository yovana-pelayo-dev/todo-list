

// this gets the text input value 
function createListFromInput() {

    const textInput = document.getElementById("todoInput");
    const inputValue= textInput.value;
    
    
    const listContainer = document.getElementById("todoList");
    
  if (inputValue !== ""){
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    listContainer.appendChild(listItem);

    textInput.value = "";
}
}

