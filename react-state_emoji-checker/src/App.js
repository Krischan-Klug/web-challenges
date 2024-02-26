import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");

  function handleClick(emojie) {
    console.log(code);
    setCode(code + emojie);
  }

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
