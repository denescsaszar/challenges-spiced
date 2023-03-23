console.clear();

/*
Convert the input value to uppercase when clicking the 
button

[ ] – Assign the input element to a variable

*/

let firstInput = document.getElementById("first-input");

/*

[ ] – Assign the button element to a variable

*/

let button = document.querySelector("button");

/*
[ ] – Add an event listener to the button, so the input 
value turns into uppercase when the button is clicked
*/

button.addEventListener("click", () => {
  console.log("clicked the button", firstInput.value);
  //   firstInput.value = "HI ITS ME";
  firstInput.value = firstInput.value.toUpperCase();
});

/*
Hint: Access the value by using `.value` on the input 
element

*/
