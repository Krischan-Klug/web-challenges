import Link from "next/link";
import { cities } from "../../lib/data";

export default function Cities() {
  return (
    <>
      <h1>Cities</h1>
      {cities.map((city) => (
        <li key={city.id}>
          <Link href={`cities/${city.slug}`}>{city.name}</Link>
        </li>
      ))}
    </>
  );
}
