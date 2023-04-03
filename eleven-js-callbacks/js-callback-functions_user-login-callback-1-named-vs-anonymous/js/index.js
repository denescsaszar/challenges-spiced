console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

// Using the "function" keyword and passing
// it as an argument to the higher order
//function "handleUserLogin":

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

function handleUserLogin(callback) {
  callback();
}

handleUserLogin(showWelcomeMessage);

// Using an anonymous function as the
// argument to the "handleUserLogin"
// function:

function handleUserLogin(callback) {
  callback();
}

handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});

// or anonymous function wrtitten as a regular function

handleUserLogin(function () {
  console.log("Welcome! You are logged in now.");
});
