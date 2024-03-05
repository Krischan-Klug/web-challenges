import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume);
    router.push("/volumes/" + randomVolume.slug.toString());
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button onClick={() => handleClick()}>Random Value</button>
      <ul>
        {volumes.map(({ title, slug }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
