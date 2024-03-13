import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: product, error } = useSWR(`/api/products/${id}`, fetcher);

  console.log(product);
  return (
    <div>
      <h1>Product</h1>
      <h3> {product.name}</h3>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
      <p>{`${product.price}: ${product.currency}`}</p>
    </div>
  );
}
