/*
# For...of to create a list

We can use loops to iterate through an array and do some stuff with each item. 
Let's create HTML elements with the help of `for...of` and a given array!

## Task

Looking at the [`js/index.js`](./js/index.js) , there is

- an `ol` created and appended to the document
- a string array stored to a variable called `programmingLanguages`.

For each array item, create a list item for the ordered list with its value as 
visible text. Use the `for...of` loop.

The following hints may guide you:

- What was the property to set the text of an HTML element again?
- Don't forget to append each list item!

Please switch to the [`js/index.js`](./js/index.js) file and be a navigator!
*/

console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const programmingLanguage of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = programmingLanguage;
  ol.append(li);
  console.log(programmingLanguage);
}

// --^-- write/change code here --^--
