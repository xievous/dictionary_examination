import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Card from "../components/Card/Card";
import { DictionaryEntry } from "../interface/interface";

// Mockar data från apin, i detta fall valde jag hello
const mockData: DictionaryEntry = {
  word: "hello",
  phonetics: [
    {
      text: "həˈləʊ",
      audio:
        "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
    },
  ],
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
  ],
};

it("should play the audio after rendering out the word", async () => {
  const mockPlayAudio = vi.fn();

  // renderar ut min komponent med mockad audio
  render(<Card data={mockData} playAudio={mockPlayAudio} />);

  const audioButton = screen.getByText(/Play Audio/i);

  await userEvent.click(audioButton);

  // Här ser jag till att min audio var kallad med rätt URL
  expect(mockPlayAudio).toHaveBeenCalledWith(
    "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
  );
});
