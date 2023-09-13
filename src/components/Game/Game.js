import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function WinBanner({ tries }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Contratulations!</strong> You won the game in{" "}
        <strong>{tries} guess(es)!</strong>
      </p>
    </div>
  );
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </div>
  );
}

function Game() {
  const [gameState, setGameState] = useState("new");
  const [tries, setGameTries] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    const addedGuess = [...guesses, guess];
    const updateGameTries = tries + 1;
    setGameTries(updateGameTries);
    setGuesses(addedGuess);

    if (tries >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState("lose");
    }

    if (guess === answer) {
      setGameState("win");
    }
  };

  return (
    <>
      {gameState === "win" && <WinBanner tries={tries} />}
      {gameState === "lose" && <LoseBanner answer={answer} />}
      <GuessResults
        answer={answer}
        guesses={guesses}
        maxGuesses={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
