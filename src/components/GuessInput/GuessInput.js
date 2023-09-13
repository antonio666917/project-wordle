import React, { useState } from "react";

function GuessInput({ guesses, handleSubmitGuess }) {
  const [guess, setGuess] = useState("");
  const [guessValid, setGuessValid] = useState(false);

  const handleChange = (event) => {
    const typeEntryToUpperCase = event.target.value.toUpperCase();
    const guessValid = typeEntryToUpperCase.length === 5;

    setGuessValid(guessValid);
    setGuess(typeEntryToUpperCase);
  };

  const resetEntry = () => {
    const resetEntry = "";
    setGuessValid(false);
    setGuess(resetEntry);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(guess);
    resetEntry();
  };

  const borderColor = guessValid ? "blue" : "var(--color-gray-300)";

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        style={{
          borderColor,
        }}
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        minLength={5}
        pattern={`[a-zA-Z]{5}`}
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
