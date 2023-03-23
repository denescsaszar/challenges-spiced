console.clear();

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
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
