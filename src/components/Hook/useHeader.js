import { useState, useCallback } from "react";

const useHeader = () => {
  const [score, setScore] = useState(0);
  const [showRuleBook, setShowRuleBook] = useState(false);

  const incrementScore = useCallback(() => {
    setScore(prevScore => prevScore + 1);
  }, []);

  return {
    score,
    setScore,
    showRuleBook,
    setShowRuleBook,
    incrementScore
  };
};

export default useHeader;
