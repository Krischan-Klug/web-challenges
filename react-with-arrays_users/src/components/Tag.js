import "./Tag.css";

export default function Tag({ tag }) {
  const isAdmin = tag === "admin";

  return <li className={`tag ${isAdmin ? "tag--highlight" : ""}`}>{tag}</li>;
}
