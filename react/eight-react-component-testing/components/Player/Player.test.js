import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {});
render(
  <Player
    name="John"
    score={2}
    onIncreaseScore={jest.fn()}
    onDecreaseScore={jest.fn()}
  />
);
const name = screen.getByText(/john/i);
const score = screen.getByText(/2/i);
const increaseButton = screen.getByRole("button", { name: "Increase score" });
const decreaseButton = screen.getByRole("button", { name: "Decrease score" });

expect(name).toBeInTheDocument();
expect(score).toBeInTheDocument();
expect(increaseButton).toBeInTheDocument();
expect(decreaseButton).toBeInTheDocument();

test("calls callbacks when increasing or decreasing score", async () => {});
render(
  <Player
    name="John"
    score={2}
    onIncreaseScore={jest.fn()}
    onDecreaseScore={jest.fn()}
  />
);
const increaseButton = screen.getByRole("button", { name: "Increase score" });
const decreaseButton = screen.getByRole("button", { name: "Decrease score" });

await userEvent.click(increaseButton);
await userEvent.click(decreaseButton);

expect(increaseButton).toBeInTheDocument();
expect(decreaseButton).toBeInTheDocument();
