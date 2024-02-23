import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={2} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
