console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // let hour = new Date().getHours();
  // hour = 16;
  if (new Date().getHours() >= 6 && new Date().getHours() <= 13) {
    return "Good Morning";
  } else if (new Date().getHours() >= 13 && new Date().getHours() <= 19) {
    return "Good Afternoon";
  } else if (new Date().getHours() >= 19 && new Date().getHours() <= 23) {
    return "Good Evening";
  } else if (new Date().getHours() >= 23 && new Date().getHours() <= 6) {
    return "Good Night";
  }
}

function getDayColor() {
  if (new Date().getDay() === 1) {
    return "darkgray";
  } else if (new Date().getDay() >= 2 && new Date().getDay() <= 5) {
    return "lightblue";
  } else if (new Date().getDay() >= 6 && new Date().getDay() <= 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
