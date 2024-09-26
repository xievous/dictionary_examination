import { render, screen } from "@testing-library/react";
import Card from "../components/Card/Card";
import { DictionaryEntry } from "../interface/interface";

const mockData: DictionaryEntry = {
  word: "hello",
  phonetics: [
    {
      text: "həˈləʊ",
      //Skiter i lägga in audio och testa den för har redan en fil där jag gör det
    },
  ],
  origin: "early 19th century: variant of earlier hollo; related to holla.",
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition: "An utterance of ‘hello’; a greeting.",
          example: "She was getting polite nods and hellos from people.",
        },
      ],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition: "Say or shout ‘hello’.",
          example: "I pressed the phone button and helloed.",
        },
      ],
    },
  ],
};

it("should display all the data mocked from the api", () => {
  render(<Card data={mockData} playAudio={() => {}} />);

  expect(screen.getByText("hello")).toBeInTheDocument();

  expect(screen.getByText("həˈləʊ")).toBeInTheDocument();

  expect(screen.getByText(/early 19th century/i)).toBeInTheDocument();

  expect(screen.getByText("noun")).toBeInTheDocument();
  expect(
    screen.getByText("An utterance of ‘hello’; a greeting.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("She was getting polite nods and hellos from people.")
  ).toBeInTheDocument();

  expect(screen.getByText("verb")).toBeInTheDocument();
  expect(screen.getByText("Say or shout ‘hello’.")).toBeInTheDocument();
  expect(
    screen.getByText("I pressed the phone button and helloed.")
  ).toBeInTheDocument();
});
