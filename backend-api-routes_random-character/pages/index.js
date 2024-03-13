import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Fail</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <h1>A random character</h1>
      <p>{`${data.firstName} ${data.lastName}`}</p>
      <p>{data.email}</p>
    </>
  );
}
