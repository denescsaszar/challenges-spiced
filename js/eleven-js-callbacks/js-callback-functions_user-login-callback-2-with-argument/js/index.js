console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

// Using the "function" keyword and passing it as an
// argument to the higher order function "handleUserLogin":

userName = "John Doe";

handleUserLogin(function (name) {
  userName = name;
});

console.log("Welcome " + userName + "! You are logged in now.");

// Using an anonymous function as the argument to the
// "handleUserLogin" function:

function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + "! You are logged in now.");
}

showWelcomeMessage(userName);
