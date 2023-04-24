import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {});
render(<Input label="Name" />);
const label = screen.getByText(/name/i);
const input = screen.getByRole("textbox");

expect(label).toBeInTheDocument();
expect(input).toBeInTheDocument();
expect(input).toHaveAttribute("type", "text");
expect(input).toHaveAttribute("name", "name");
expect(input).toHaveAttribute("id", "name");

test("calls callback on every user input", async () => {});
render(<Input label="Name" />);
const input = screen.getByRole("textbox");

await userEvent.type(input, "John");
await userEvent.type(input, "Jane");
