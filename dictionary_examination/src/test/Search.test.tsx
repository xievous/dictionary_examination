import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

it("should type in the searchbar", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputBar = screen.getByPlaceholderText("Enter a word...");

  await user.type(inputBar, "Jeans");

  expect(inputBar).toHaveValue("Jeans");
});

it("should search after pressing search button", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputBar = screen.getByPlaceholderText("Enter a word...");
  const searchButton = screen.getByRole("button");

  await user.type(inputBar, "jeans");
  await user.click(searchButton);

  const heading = await screen.findByRole("heading", { level: 2 }); //Väntar på att headern är renderad
  expect(heading).toHaveTextContent("jeans");
});

it("should show error message if no word is found", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputBar = screen.getByPlaceholderText("Enter a word...");
  const searchButton = screen.getByRole("button");

  await user.type(inputBar, "concac");
  await user.click(searchButton);

  const errorMessage = await screen.findByRole("paragraph");
  expect(errorMessage).toHaveTextContent(
    "Word not found. Please try another word."
  );
});
