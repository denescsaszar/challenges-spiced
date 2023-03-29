/*
forEach

The array method forEach executes some logic for each element 
within an array.

const pets = ["bird", "cat", "dog", "ferret", "fish"];
pets.forEach((pet) => {
  const petElement = document.createElement("p");
  petElement.textContent = pet;
  document.body.append(petElement);
});

    ❗️ The callback function provided to forEach must not use 
    a return statement. forEach > does not return a new array.

    ❗️ You should use forEach to use a side-effect, like 
    document.createElement

*/

const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach();

// Task 1

// For each hex code a new `div` with the class `color-box`
// should be created.
// The `background-color` of the `div` should be the current hex code.
// The element should be added to the page.

colors.forEach((color) => {
  const colorElement = document.createElement("div");
  colorElement.textContent = "color-box";
  document.body.append(colorElement);
});

// Task 2

// Instead of writing the callback function directly inside the forEach method, we can use a function reference.

// Create a new function called `renderColorBox`.
// Copy your code from the arrow function into this new function.
// Use the forEach method with renderColorBox to create the color boxes a second time!

function renderColorBox(colors) {
  colors.forEach((color) => {
    const colorElement = document.createElement("div");
    color.Element.textContent = "color-box";
    document.body.append(colorElement);
  });
}
