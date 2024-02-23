import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button color="green" disabled={false} text="Click me!" />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <>
      {!disabled ? (
        <button style={{ textColor: { color } }} disabled>
          {text}
        </button>
      ) : null}
    </>
  );
}
