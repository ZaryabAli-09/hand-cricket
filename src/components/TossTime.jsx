import React, { useState } from "react";
import Header from "./Header";
import TossAnim from "../assets/tossAnimation.gif";
const TossTime = ({ handleDataFromChild }) => {
  const [tossState, setTossState] = useState(false);
  const [tossWonOrLose, setTossWonOrLose] = useState(null);

  function handleBackBtn() {
    handleDataFromChild(false);
  }

  function makeAToss() {
    setTossState(true);
    const toss = Math.floor(Math.random() * 2);
    if (toss === 1) {
      setTossWonOrLose("Won"); // player have to choose
    } else {
      setTossWonOrLose("Lose");
    }
    setTimeout(() => {
      setTossState(false);
    }, 1500);
  }

  return (
    <div className="bg-secondary-color p-5 rounded-lg flex flex-col items-center relative">
      <Header />
      <h3 className="text-center font-extrabold text-3xl mt-5">Toss Time</h3>
      {tossState && <img className="w-[250px]" src={TossAnim} alt="" />}
      <div className="flex space-x-4 mt-4">
        {!tossState ? (
          <>
            <button
              onClick={makeAToss}
              className="bg-white w-[90px] py-2 rounded-lg font-extrabold hover:bg-primary-color hover:text-white cursor-pointer"
            >
              Tails
            </button>

            <button
              onClick={makeAToss}
              className="bg-white w-[90px] py-2 rounded-lg font-extrabold hover:bg-primary-color hover:text-white cursor-pointer"
            >
              Heads
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <br />
      <br />
      {tossWonOrLose === null
        ? ""
        : tossWonOrLose === "Won"
        ? "Won The Toss"
        : "Lose The Toss"}
      <button
        className="bg-tertiary-color  text-xs w-[70px] py-1 rounded-lg font-extrabold hover:bg-primary-color hover:text-white cursor-pointer absolute left-2 bottom-2"
        onClick={handleBackBtn}
      >
        back
      </button>
    </div>
  );
};

export default TossTime;
