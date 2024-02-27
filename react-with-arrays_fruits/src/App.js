import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍌 Apple",
      color: "Green",
    },
    {
      id: 1339,
      name: "🍌 Dog",
      color: "White",
    },
    {
      id: 1340,
      name: "🍌 Cat",
      color: "Black",
    },
    {
      id: 1341,
      name: "🍌 Cherry",
      color: "Red",
    },
  ];

  return (
    <ul>
      {fruits.map((fruit) => {
        return (
          <div className="app">
            <Card color={fruit.color} name={fruit.name} />
          </div>
        );
      })}
    </ul>
  );
}
