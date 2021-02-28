import { useCallback, useState, useMemo } from "react";

export const usePlay = ({ winAction }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [botChoice, setBotChoice] = useState("");
  const [result, setResult] = useState("tie");

  const [botWinnerEffect, setBotWinnerEffect] = useState("");
  const [playerWinnerEffect, setPlayerWinnerEffect] = useState("");

  const choices = useMemo(
    () => ["scissor", "paper", "rock", "lizard", "spock"],
    []
  );

  const moves = useMemo(
    () => ({
      paper: 0,
      rock: 1,
      lizard: 2,
      spock: 3,
      scissor: 4
    }),
    []
  );

  // Get result based on the Player/Bot choice.
  const winOrLose = useCallback(
    (playerMove, botMove) => {
      setPlayerChoice(playerMove);
      setBotChoice(botMove);
      const results = ["tie", "win", "lose"];

      let diff = moves[botMove] - moves[playerMove];
      if (diff < 0) {
        diff += 5;
      }
      while (diff > 2) {
        diff -= 2;
      }

      if (diff === 1) winAction(prevScore => prevScore++);

      if (results[diff].localeCompare("win") === 0) {
        setPlayerWinnerEffect("win");
      } else if (results[diff].localeCompare("lose") === 0) {
        setBotWinnerEffect("win");
      }

      setResult(results[diff]);
    },
    [moves, winAction]
  );

  // Click handler for the Choice in Board.
  const boardClickHandler = useCallback(
    async event => {
      const choice = event.target.dataset.choice;
      if (choices.includes(choice)) {
        winOrLose(choice, choices[Math.floor(Math.random() * 5)]);
      }
    },
    [choices, winOrLose]
  );

  // Click handler for the Play Again button.
  const reset = useCallback(() => {
    setPlayerChoice("");
    setBotChoice("");
    setResult("lose");
    setBotWinnerEffect("");
    setPlayerWinnerEffect("");
  }, []);

  return {
    boardClickHandler,
    result,
    playerChoice,
    botChoice,
    reset,
    botWinnerEffect,
    playerWinnerEffect
  };
};
