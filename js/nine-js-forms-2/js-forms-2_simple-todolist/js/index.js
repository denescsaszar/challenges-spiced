console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

// 1. Log form data to the console
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data);
  event.target.reset();
  form.elements.headline.focus();
});

// 2. Create list entries
function createTodoList(data) {
  const listItem = document.createElement("li");
  const headline = document.createElement("h2");
  const text = document.createElement("p");
  headline.textContent = data.get("headline");
  text.textContent = data.get("task");
  listItem.append(headline, text);
  todoList.append(listItem);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  createTodoList(data);
  event.target.reset();
  form.elements.headline.focus();
});

/*

- Write an event listener for the form submit.
- Log the user data to the console (we will use the data later in this exercise).
- After submit, reset the form and focus the input field with the name `headline`.

### 2. Create list entries

Look at the [`index.html`](./index.html) file: there already is an `ul` for our submitted todos. We only need to write a function which creates list items and appends them to this list.

Here are some hints to guide you:

- The function needs one parameter (which will be the form data object).
- The list item has
  - a headline containing the string from `data.headline`
  - a text element containing the string from `data.task`.
- Make sure NOT to use `innerHTML` since it is a [security risk when working with user inputs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
- Don't forget to
  - append the headline and text element to the list item as well as the list item to the todoList
  - call the function when the submit event is fired and pass the data object as an argument.

*/
