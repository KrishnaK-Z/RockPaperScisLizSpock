import React, { Fragment } from "react";
import { BgPenta } from "../../assets/svg";
import { usePlay } from "../Hook/usePlay";
import { icons } from "./icons";
import "./playGround.scss";

const PlayGround = ({ winAction }) => {
  const { boardClickHandler, result, playerChoice, botChoice, reset } = usePlay(
    {
      winAction
    }
  );
  return (
    <Fragment>
      {!playerChoice ? (
        <section className={"playground"} onClick={boardClickHandler}>
          <img src={BgPenta} alt={""} />
          {icons.map(({ title, src }, index) => (
            <div key={index} className={`icon ${title}`} data-choice={title}>
              <img src={src} alt={title} data-choice={title} />
            </div>
          ))}
        </section>
      ) : (
        <>
          <section className={"result__board"}>
            <div className="pick">
              you picked
              {icons
                .filter(({ title }) => title.localeCompare(playerChoice) === 0)
                .map(({ title, src }) => (
                  <div
                    className={`icon ${playerChoice} ${
                      result.localeCompare("win") ? "lose" : "win"
                    }`}
                    key={title}
                  >
                    <img src={src} alt="your pick" />
                  </div>
                ))}
            </div>

            <div className={"result"}>
              {`you ${result}`}
              <button type="button" className={"reset"} onClick={reset}>
                play again
              </button>
            </div>

            <div className="pick">
              the house picked
              {botChoice &&
                icons
                  .filter(({ title }) => title.localeCompare(botChoice) === 0)
                  .map(({ title, src }) => (
                    <div
                      className={`icon ${botChoice} ${
                        result.localeCompare("win") ? "win" : "lose"
                      }`}
                      key={title}
                    >
                      <img src={src} alt="your pick" />
                    </div>
                  ))}
            </div>
          </section>
          <div className={"result outside"}>
            {`you ${result}`}
            <button type="button" className={"reset"} onClick={reset}>
              play again
            </button>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default PlayGround;