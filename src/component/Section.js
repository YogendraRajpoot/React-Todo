import "./Section.css";
import style from "./strick.css";
import React, { useState } from "react";

export const Section = () => {
  const [value, setvalue] = useState("");
  const [todolist, settodolist] = useState([]);
  const [isStricked, setIsStricked] = useState(false);
  return (
    <div className="container">
      <div className="left-box">
        <p>Todo-List</p>
        <input
          placeholder="Make List"
          value={value}
          onChange={(element) => setvalue(element.currentTarget.value)}
        ></input>
        <button
          onClick={() => {
            settodolist([...todolist, value]);
            setvalue("");
          }}
        >
          ADD
        </button>
      </div>
      <div className="right-box">
        <p>Display-List</p>
        <ul>
          {todolist.map((todo, value) => {
            return (
              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsStricked(!isStricked);
                  }}
                />
                <span className={isStricked ? style.strick : style.normal}>
                  {todo}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
