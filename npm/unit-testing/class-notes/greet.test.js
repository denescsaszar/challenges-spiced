import { greet } from "./greet";

test("greet without parameter", () => {
  const result = greet();

  expect(result).toBe("Hello stranger!");
});

test('greet return for "sven" as input', () => {
  const result = greet("Sven");

  expect(result).toBe("Hello coach!");
});

test('greet return for "Klaus" as input', () => {
  const result = greet("Klaus");

  expect(result).toBe("Hello Klaus!");
});
