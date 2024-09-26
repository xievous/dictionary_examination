import "./App.css";
import React, { useState } from "react";
import { dictionaryApi } from "./api/Api";
import Card from "./components/Card/Card";

const App: React.FC = () => {
  // Här definerar jag att jag React
  const [word, setWord] = useState<string>("");
  const { dictionaryData, error, searchWord } = dictionaryApi(); // Hämtar min api kod och kör den

  const playAudio = (audioUrl?: string) => {
    // Hämtar audion om URL:en är tillgänglig
    if (audioUrl) {
      const audio = new Audio(audioUrl); // Skapar audio med urlen
      audio.play();
    }
  };

  return (
    <main>
      <h1>Dictionary Search</h1>
      <section className="searchContainer">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
        />
        <button onClick={() => searchWord(word)}>Search</button>
      </section>

      {error && <p>{error}</p>}

      {dictionaryData && <Card data={dictionaryData} playAudio={playAudio} />}
    </main>
  );
};

export default App;
