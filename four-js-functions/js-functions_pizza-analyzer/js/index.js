console.clear();

/*

### 1 Calculate the Pizza Gain

First, we want to calculate the difference of the two pizza areas for two given pizza diameters. For that, do the following:

1. Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
2. Inside this function, calculate the areas of both pizzas.
   > 💡 you can find the formula for that online. The value of pi can be accessed via `Math.PI`.
3. Calculate the pizza gain in percent relative to the first pizza
   > 💡 The formula is: `(area2 - area1) / area1 * 100`.
4. Set the `textContent` of the output element to that value. Use `Math.round(calculatedValue)` to round the pizza gain to the next whole integer value.
5. Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
   > 💡 You can use the queried elements and get their value like this: `pizzaInput.value`
6. Now call the function and pass in the two pizza sizes as the arguments.

### 2 Change pizza dipslay sizes

Great! Now we know how much pizza we gain if we choose the second pizza. But we don't have any visual relations between these two numbers. So lets adapt the pizza displays.

1. Write a function `updatePizzaDisplay` which has two parameters: `pizzaElement` - the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
2. Calculate the new display size of the pizza element
   > 💡 The formula is: `newSize / 24 * 100`.
3. Set the width of the `pizzaElement` to this new value.
   > 💡 You can use `pizzaElement.style.width` for that.
   > 💡 The width needs a unit, a simple number is not enough. Don't forget to concat "px" to your calculated number.
4. Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.

### 3 Extra: Change the Output Background

Let's update the background of the output display to indicate whether we gain or loose pizza if we choose pizza 2.

1. Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
2. Set the background color of the `outputSection` to "var(--red)", if we loose pizza. Otherwise, the background color should be set to "var(--green)"
3. Use this function in both event listeners with the correct sizes as arguments.

   > 💡 `var(--<variable-name>)` is how you can use predefined variables in CSS. In this case, both color codes are stored in the variables `--red` and `--green` on the `:root` element of the HTML document (have a look into the CSS file!).

   */

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzasize1 = 24;
let pizzasize2 = 24;

// !!!COMMENT: I COULD NOT FINISH THIS TASK AND COPIED CODE
// FROM THE SOLUTION. I WILL TRY TO UNDERSTAND IT AND
// REWRITE IT MYSELF.

pizzaInput1.addEventListener("input", () => {
  pizzasize1 = pizzaInput1.value;
  console.log(pizzasize1);
  calculatePizzaGain(pizzasize1, pizzasize2),
    updatePizzaDisplay(pizza1, pizzasize1),
    updatePizzaDisplay(pizza2, pizzasize2),
    updateOutputColor(pizzasize1, pizzasize2);
});

pizzaInput2.addEventListener("input", () => {
  pizzasize2 = pizzaInput2.value;
  console.log(pizzasize2);
  calculatePizzaGain(pizzasize1, pizzasize2),
    updatePizzaDisplay(pizza1, pizzasize1),
    updatePizzaDisplay(pizza2, pizzasize2),
    updateOutputColor(pizzasize1, pizzasize2);
});

// Task 1

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  console.log(Math.PI);
  console.log("calculatePizzaGain");
  console.log(diameter1, diameter2);
  console.log(Math.PI(diameter1 / 2));
  console.log(Math.PI(diameter2 / 2));
  console.log(Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2));
  console.log(Math.PI(diameter2 / 2) * Math.PI(diameter2 / 2));
  console.log(
    Math.PI(diameter2 / 2) * Math.PI(diameter2 / 2) -
      Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2)
  );
  console.log(
    ((Math.PI(diameter2 / 2) * Math.PI(diameter2 / 2) -
      Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2)) /
      (Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2))) *
      100
  );
  output.textContent = Math.round(
    ((Math.PI(diameter2 / 2) * Math.PI(diameter2 / 2) -
      Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2)) /
      (Math.PI(diameter1 / 2) * Math.PI(diameter1 / 2))) *
      100
  );
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
