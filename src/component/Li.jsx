import React, { useState } from "react";
// import styles from "./Stk.css";
import styles from "./Todo.module.css"

export const Li = ({ value }) => {
  const [isStricked, setisStricked] = useState(false);
  return (
    <li>
      <input
        type="checkbox"
        // className="input-check"
        onChange={() => {
          setisStricked(!isStricked);
          console.log(isStricked);
        }}
      />
      <span
        className={
          isStricked? styles.strick : styles.normal }>
        {value}
      </span>
    </li>
  );
};
