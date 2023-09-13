import React from "react";
import { range } from "../../utils";

function Cell({ letter }) {
  return <span className="cell">{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={typeof value === "undefined" ? undefined : value[num]}
        />
      ))}
    </p>
  );
}

export default Guess;
