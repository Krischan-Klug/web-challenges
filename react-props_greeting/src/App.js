import "./styles.css";

export default function App() {
  return (
    <>
      <Greetings name="Krischan" />
    </>
  );
}

function Greetings({ name }) {
  if (name === "Dome") {
    return <h1> Hello Coach! </h1>;
  }

  return <h1>Hello {name}!</h1>;
}
