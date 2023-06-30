document.getElementById("todo-list").addEventListener("click", function(event) {
  if (event.target.classList.contains("completed-button")) {
    var li = event.target.parentNode;
    li.classList.toggle("completed");
  }

  if (event.target.classList.contains("delete-button")) {
    var li = event.target.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }
});

document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");

  if (todoInput.value.trim() !== "") {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var completedButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    span.textContent = todoInput.value;
    completedButton.innerHTML = "&check;";
    completedButton.classList.add("completed-button");
    deleteButton.innerHTML = "&times;";
    deleteButton.classList.add("delete-button");

    li.appendChild(span);
    li.appendChild(completedButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = "";
  }
});
