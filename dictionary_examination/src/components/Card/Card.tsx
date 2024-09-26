import React from "react";
import "./card.css";
import { DictionaryEntry } from "../../interface/interface";

interface DictionaryCardProps {
  data: DictionaryEntry; // Datan som ska visas
  playAudio: (audioUrl?: string) => void; // Function som spelar audio
}

const Card: React.FC<DictionaryCardProps> = ({ data, playAudio }) => {
  return (
    <div className="card">
      <h2 className="word">{data.word}</h2>
      <h3>Phonetics:</h3>
      {data.phonetics.map(
        (
          phonetic,
          index // Mappar ut phonetics
        ) => (
          <div key={index}>
            <p>{phonetic.text}</p>
            {phonetic.audio && (
              <button onClick={() => playAudio(phonetic.audio)}>
                Play Audio
              </button>
            )}
          </div>
        )
      )}
      {data.origin && (
        <div>
          <h3>Origin:</h3>
          <p>{data.origin}</p>
        </div>
      )}
      <h3>Meanings:</h3>
      {data.meanings.map(
        (
          meaning,
          index // Iterar genom Meanings arrayen i data och sen mappar jag ut definitioner
        ) => (
          <div key={index}>
            <h4>{meaning.partOfSpeech}</h4>
            <ul>
              {meaning.definitions.map((definition, defIndex) => (
                <li key={defIndex}>
                  <p>
                    <strong>Definition:</strong> {definition.definition}
                  </p>
                  {definition.example && (
                    <p>
                      <strong>Example:</strong> {definition.example}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
