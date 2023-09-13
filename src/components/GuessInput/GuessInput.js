import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleChange = (event) => {
    const typeEntry = event.target.value;
    setGuess(typeEntry);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    resetEntry();
  };

  const resetEntry = () => {
    const resetEntry = "";
    setGuess(resetEntry);
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default GuessInput;
