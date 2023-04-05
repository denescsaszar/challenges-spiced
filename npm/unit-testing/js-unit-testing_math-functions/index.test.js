import { add, subtract, multiply, divide } from "./index.js";

test("add", () => {
  //  - returns 5 if called with add(2, 3)
  // returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
  // returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)
  expect(add(2, 3)).toBe(5);
  expect(add(2, -3)).toBeLessThan(0);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// - returns 10 if called with subtract(15, 5)
// - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

test("substract", () => {
  expect(subtract(2, 3)).toBe(-1);
  expect(subtract(15, 5)).toBe(10);
  expect(subtract(5, 15)).toBeLessThan(0);
});

// returns 8 if called with multiply(2, 4)
// returns a negative value if only the first argument is negative
// returns a negative value if only the second argument is negative
// returns a positive value if called with two negative arguments

test("multiplyt", () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-2, 3)).toBeLessThan(0);
  expect(multiply(2, -3)).toBeLessThan(0);
  expect(multiply(-2, -3)).toBeGreaterThan(0);
});

// returns 3 if called with divide(9, 3)
// returns "You should not do this!" if called with 0 as second argument

test("divide", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(9, 0)).toBe("You should not do this!");
  expect(divide(5, 2)).toBeCloseTo(2.5);
});
