import "./Section.css";
import React from "react";

export const Section = () => {
  return (
    <div className="container">
      <div className="left-box">
          <p>Todo-List</p>
          <input placeholder="Make List"></input>
          <button>ADD</button>
      </div>
      <div className="right-box">
        <p>Display-List</p>
      </div>
    </div>
  );
};
