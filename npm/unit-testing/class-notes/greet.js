export function greet(name = "stranger") {
  if (name === "Sven") {
    return "Hello coach!";
  }

  return `Hello ${name}!`;
}
