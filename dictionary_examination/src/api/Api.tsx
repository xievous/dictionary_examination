import { useState } from "react";
import { DictionaryEntry } from "../interface/interface";

export const dictionaryApi = () => {
  const [dictionaryData, setDictionaryData] = useState<DictionaryEntry | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const searchWord = async (word: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        throw new Error("Word not found.");
      }
      const data: DictionaryEntry[] = await response.json();
      setDictionaryData(data[0]);
      setError(null);
    } catch (err) {
      setError("Word not found. Please try another word.");
      setDictionaryData(null);
    }
  };

  return { dictionaryData, error, searchWord };
};
