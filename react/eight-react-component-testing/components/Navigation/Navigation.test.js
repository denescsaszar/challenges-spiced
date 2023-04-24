import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {});
render(<Navigation />);
const links = screen.getAllByRole("link");
const playLink = screen.getByRole("link", { name: "Play" });
const historyLink = screen.getByRole("link", { name: "History" });

expect(links).toHaveLength(2);
expect(playLink).toBeInTheDocument();
expect(historyLink).toBeInTheDocument();
