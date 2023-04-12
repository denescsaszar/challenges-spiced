console.clear();

/*
TOS is short for Terms of Service. Here, the `alert()` in the submit event handler 
should only be called if the `tos` checkbox has been checked.

> 💡 You can use an early `return;` in an if statement to prevent the `alert()` from 
being called.

In addition, the error message below the checkbox should only be displayed if the 
checkbox is not set when submitting. Use the given functions `showTosError()` and 
`hideTosError()`.

Can you make the error message hidden initially (before the form is submitted)?
*/

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  hideTosError();

  const tos = form.tos.checked;
  console.log("tos: ", tos);

  if (tos === true) {
    return showTosError();
  } else {
    return hideTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
