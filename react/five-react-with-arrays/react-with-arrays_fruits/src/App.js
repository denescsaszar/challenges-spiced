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
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1340,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => {
        return <Card key={index} fruit={fruit} />;
      })}
    </div>
  );
}
