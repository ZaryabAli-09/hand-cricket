import React from "react";
import MaleAvatar from "./assets/male.png";
import FemaleAvatar from "./assets/female.png";
import { FaComputer } from "react-icons/fa6";
import { FaDice } from "react-icons/fa";
const App = () => {
  return (
    <main className="p-10 bg-tertiary-color max-w-lg mx-auto">
      <div className="bg-secondary-color p-5 rounded-lg flex flex-col items-center">
        <p className="text-center font-extrabold text-4xl  text-primary-color">
          Hello Hand
        </p>
        <h1 className="text-center font-extrabold text-5xl ">
          Cricket<span className="text-primary-color">.</span>
        </h1>
        <input
          className="mt-8 p-1 rounded-lg text-sm placeholder-gray-400 text-center px-6 focus:outline-none border-4  focus:border-primary-color font-bold"
          placeholder="Name (4-6 characters)"
          type="text"
        />
        <div className="flex space-x-3 mt-5 ">
          <div className="p-2 border-4 border-primary-color rounded-md hover:bg-primary-color cursor-pointer">
            <img className="w-[40px]" src={MaleAvatar} alt="" />
          </div>
          <div className="p-2 border-4 border-primary-color rounded-md hover:bg-primary-color cursor-pointer">
            <img className="w-[40px]" src={FemaleAvatar} alt="" />
          </div>
        </div>

        <h3 className="mt-5 font-bold text-primary-color">
          ------Single Player------
        </h3>
        <div className="flex space-x-2 mt-5">
          <div
            className="flex flex-col items-center border-4 border-primary-color
          p-2 rounded-md bg-white hover:bg-primary-color cursor-pointer hover:text-white w-[90px]"
          >
            <FaComputer className="text-xl" />{" "}
            <span className="text-xs font-extrabold ">Computer</span>
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
    </main>
  );
};

export default App;
