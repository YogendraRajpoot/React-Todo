import "./Section.css";
import React, { useState } from "react";
import { Leftbox } from "./Leftbox.js";
import { Li } from "./Li";

export const Section = () => {
  const [todolist, settodolist] = useState([]);
  return (
    <div className="container">
      <Leftbox todolist={todolist} settodolist={settodolist} />
      
      <div className="right-box">
        <p>Display-List</p>
        <ul>
          {todolist.map((todo, value) => <Li value={todo}/>)}
        </ul>
      </div>
    </div>
  );
};
