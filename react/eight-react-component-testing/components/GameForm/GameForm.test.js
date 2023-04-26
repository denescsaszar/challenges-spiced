import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {});
render(<GameForm />);
const inputFields = screen.getAllByRole("textbox");
const button = screen.getByRole("button", { name: "Create a new game" });

expect(inputFields).toHaveLength(2);
expect(button).toBeInTheDocument();

test("renders a form with the accessible name 'Create a new game'", () => {});
render(<GameForm />);
const form = screen.getByRole("form", { name: "Create a new game" });

expect(form).toBeInTheDocument();

test("submits the correct form data when every field is filled out", async () => {});
render(<GameForm />);
const inputFields = screen.getAllByRole("textbox");
const button = screen.getByRole("button", { name: "Create a new game" });

await userEvent.type(inputFields[0], "Dodelido");
await userEvent.type(inputFields[1], "John");
await userEvent.click(button);

test("does not submit form if one input field is left empty", async () => {});
render(<GameForm />);
const inputFields = screen.getAllByRole("textbox");
const button = screen.getByRole("button", { name: "Create a new game" });

await userEvent.type(inputFields[0], "Dodelido");
await userEvent.click(button);
