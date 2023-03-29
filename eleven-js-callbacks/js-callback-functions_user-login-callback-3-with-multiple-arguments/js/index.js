console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

// Using a named function:

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// Using an anonymous function:

handleUserLogin(function (userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
