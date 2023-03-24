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

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  // no need for default because it is just a button
  const toast = document.createElement("li");
  toast.classList.add("toast");
  toast.textContent = "This is a toast message";
  toastContainer.appendChild(toast);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
