console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

/*

There are two form fields where the user can enter a value.
As soon as one of these values change, both values shall be multiplied. The result is to be rendered with the help of the output element.

## Hints

The following hints might guide you:

- Consider the `input` event for both input fields.
- How do you set the text content for an HTML element again?

*/

firstInput.addEventListener("input", () => {
  result.textContent = firstInput.value * secondInput.value;
});

secondInput.addEventListener("input", () => {
  result.textContent = firstInput.value * secondInput.value;
});
