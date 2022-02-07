import React, { useState } from "react";
import styles from "./lines.css";

export const Li = ({ value }) => {
  const [isStricked, setisStricked] = useState(false);
  return (
    <li key={""}>
      <input
        type="checkbox" 
        // className="input-check" 
        onChange={() => {
            setisStricked(!isStricked);
        }}
      />
      <span className={isStricked ? styles.strick : styles.normal}>{value}</span>
    </li>
  );
};
