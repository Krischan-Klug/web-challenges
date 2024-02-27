import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p style={{ backgroundColor: color }} className="card">
      {name}
    </p>
  );
}
