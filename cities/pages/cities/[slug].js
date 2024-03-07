import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { slug } = router.query;

  const city = cities.find((city) => city.slug === slug);
  console.log(city);

  if (!city) {
    return null;
  }

  return (
    <>
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <h5>Population: {city.population}</h5>
      <Link href="/cities">Back to cities</Link>
    </>
  );
}
