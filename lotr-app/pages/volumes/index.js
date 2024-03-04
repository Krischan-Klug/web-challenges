import Link from "next/link";
import { introduction, volumes } from "@/lib/data";

export default function Volumes() {
  console.log(volumes);

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            {volumes[0].title}
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">{volumes[1].title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers"> {volumes[2].title}</Link>
        </li>
      </ul>
    </div>
  );
}
