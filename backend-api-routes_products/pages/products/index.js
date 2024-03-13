import useSWR from "swr";

export default function ProductsPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: products, error } = useSWR("/api/products", fetcher);

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
