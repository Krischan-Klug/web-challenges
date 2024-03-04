import { volumes } from "@/lib/data";

export default function TheFellowshipOfTheRing() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  console.log(book);

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
}
