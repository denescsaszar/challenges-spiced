console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
// using multiple callback functions

// step 1

// "Welcome ${userName}! You are logged in now as ${userRole}."

function showWelcomeMessage(name, role) {
  console.log(`Welcome ${name}! You are logged in now as ${role}.`);
}

// showWelcomeMessage("Maria", "Gimena");

// step 2

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

// showErrorMessage("I am an error message");

// step 3

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

// step 4

handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
