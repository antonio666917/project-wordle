import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guesses, answer, maxGuesses }) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
