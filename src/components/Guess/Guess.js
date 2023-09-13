import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const statusClass = status ? `cell ${status}` : "cell";
  return <span className={statusClass}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          status={result ? result[num].status : undefined}
          letter={typeof value === "undefined" ? undefined : value[num]}
        />
      ))}
    </p>
  );
}

export default Guess;
