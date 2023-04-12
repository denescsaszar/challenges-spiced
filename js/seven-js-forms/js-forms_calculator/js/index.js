console.clear();

/*
Build a calculator that can add, subtract, multiply and divide two numbers.

Add the following functionality to the submit event handler:

- Use the values of the `numberA` and `numberB` inputs to perform the operation 
selected by the `operator` input on them. You can use the provided helper functions 
`add()`, `subtract()`, `multiply()` and `divide()`.
- Assign the result to the `result` variable.

> 💡 Make sure to thoroughly test the addition operation, as it can have unexpected 
results.
*/

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const a = parseInt(form.numberA.value);
  const b = parseInt(form.numberB.value);
  const sum = form.addition.checked;
  const sub = form.subtraction.checked;
  const mul = form.multiplication.checked;
  const div = form.division.checked;

  console.log(a, b);

  let result;

  if (sum === true) {
    result = add(a, b);
    console.log(add(a, b));
  } else if (sub === true) {
    result = subtract(a, b);
  } else if (mul === true) {
    result = multiply(a, b);
  } else {
    result = divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
