console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// data-js="add-button"
// data-js="clear-button"
// data-js="toast-container"

// In the bottom right corner you can find a toast messages container with one entry.

// When clicking the "Add toast message" button a new entry should be appended to the
// toast messages container. Create the HTML element for a new toast message with
// document.createElement(). Have a look at the index.html to see the required
// HTML tag and class name.

// When clicking the "Clear all toast messages" button, the list of toast messages
// should be emptied. Afterwards you should still be able to add new toast messages
// and clear them again.

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  const listElement = document.createElement("li");

  toastContainer.append(listElement);

  listElement.classList.add("toast-container__message");
  listElement.textContent = "I am a new message!";
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
