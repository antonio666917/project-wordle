import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses, maxGuesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return <Guess key={crypto.randomUUID()} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;
