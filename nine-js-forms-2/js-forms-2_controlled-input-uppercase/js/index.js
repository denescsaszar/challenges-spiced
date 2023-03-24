console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("keyup", (event) => {
  event.target.value = event.target.value.toUpperCase();
});

/*

When a user enters a letter, it shall immediately be changed into a capital one.

Please consider

- the `input` event as well as
- how to read and write the value of a form field. There's definitely a difference between the value of the event's target and the (after-event) value of your input field.

*/
