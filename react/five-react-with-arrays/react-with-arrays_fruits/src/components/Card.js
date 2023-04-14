import "./Card.css";

export default function Card({ fruit }) {
  console.log("Card props", fruit);
  return <p className="card">{fruit.name}</p>;
}
