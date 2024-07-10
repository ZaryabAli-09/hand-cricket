import React, { useState, useRef } from "react";
import MaleAvatar from "./assets/male.png";
import FemaleAvatar from "./assets/female.png";
import { FaComputer } from "react-icons/fa6";
import { FaDice } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import TossTime from "./components/TossTime";
import Header from "./components/Header";
const App = () => {
  const [userName, setUserName] = useState("");
  const [tossTime, setTossTime] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  const inputRef = useRef(null);

  function avatarClickHandler(e) {
    setUserAvatar(e.target.name);
  }

  function getTossTime(bool) {
    setTossTime(bool);
  }

  function playWithComputer() {
    if (!userName || userName === "") {
      return inputRef.current.focus();
    }
    if (!userAvatar) {
      return alert("Please select avatar");
    }
    setTossTime(true);
  }
  // function makeAToss() {
  //   const toss = Math.floor(Math.random() * 2);
  //   if (toss == 1) {
  //     return true; // player have to choose
  //   }
  // }

  return (
    <main className="p-10 bg-tertiary-color max-w-lg mx-auto">
      {tossTime === true ? (
        <TossTime handleDataFromChild={getTossTime} />
      ) : tossTime === false ? (
        <div className="bg-secondary-color p-5 rounded-lg flex flex-col items-center">
          <Header />
          <input
            ref={inputRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-8 p-1 rounded-lg text-sm placeholder-gray-400 text-center px-6 focus:outline-none border-4  focus:border-primary-color font-bold"
            placeholder="Name (4-6 characters)"
            type="text"
          />
          <div className="flex space-x-3 mt-5 ">
            <div
              className={`p-2 border-4 border-primary-color rounded-md hover:bg-primary-color cursor-pointer ${
                userAvatar === "Male" && "bg-primary-color"
              } `}
            >
              <img
                name="Male"
                onClick={avatarClickHandler}
                className="w-[40px]"
                src={MaleAvatar}
                alt=""
              />
            </div>
            <div
              className={`p-2 border-4 border-primary-color rounded-md hover:bg-primary-color cursor-pointer ${
                userAvatar === "Female" && "bg-primary-color"
              } `}
            >
              <img
                name="Female"
                onClick={avatarClickHandler}
                className="w-[40px]"
                src={FemaleAvatar}
                alt=""
              />
            </div>
          </div>

          <h3 className="mt-5 font-extrabold text-primary-color">
            ------Single Player------
          </h3>
          <div className="flex space-x-2 mt-5">
            <div
              className="flex flex-col items-center border-4 border-primary-color
        p-2 rounded-md bg-white hover:bg-primary-color cursor-pointer hover:text-white w-[90px]"
              onClick={playWithComputer}
            >
              <FaComputer className="text-xl" />{" "}
              <span className="text-xs font-extrabold ">Computer</span>
            </div>{" "}
          </div>
          <h3 className="mt-5 font-extrabold text-primary-color">
            ------MultiPlayer------
          </h3>
          <div className="flex space-x-2 mt-5">
            <div
              className="flex flex-col items-center border-4 border-primary-color
        p-2 rounded-md bg-white hover:bg-primary-color cursor-pointer hover:text-white w-[90px]"
            >
              <FaUserFriends className="text-xl" />{" "}
              <span className="text-xs font-extrabold ">Friends</span>
            </div>{" "}
            <div
              className="flex flex-col items-center border-4 border-primary-color
        p-2 rounded-md bg-white hover:bg-primary-color cursor-pointer hover:text-white w-[90px]"
            >
              <FaDice className="text-xl" />{" "}
              <span className="text-xs font-extrabold ">Random</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
