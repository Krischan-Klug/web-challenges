import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hi</Button>
      <Button>Bye</Button>
      <Button>Go</Button>
      <Button>Stop</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
