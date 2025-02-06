document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var input = document.getElementById("todo-input");
  var inputValue = input.value.trim();
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }
  var li = document.createElement("li");
  li.textContent = inputValue;
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
});