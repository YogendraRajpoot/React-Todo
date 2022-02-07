import React, { useState } from "react";

export const Leftbox = ({ todolist, settodolist }) => {
  const [value, setvalue] = useState("");

  return (
    <div className="left-box">
      <p>Todo-List</p>
      <input
        placeholder="Make List"
        value={value}
        onChange={(element) => setvalue(element.currentTarget.value)}
      ></input>
      <button
        onClick={() => {
          if (value) {
            settodolist([...todolist, value]);
            setvalue("");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};
