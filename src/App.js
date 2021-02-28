import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header";
import useHeader from "./components/Hook/useHeader";
import PlayGround from "./components/PlayGround";
import Rules from "./components/Rules";

function App() {
  const { score, incrementScore, showRuleBook, setShowRuleBook } = useHeader();

  return (
    <Fragment>
      <Header score={score} />
      <PlayGround winAction={incrementScore} />
      <Rules showModal={showRuleBook} setModalState={setShowRuleBook} />
    </Fragment>
  );
}

export default App;
