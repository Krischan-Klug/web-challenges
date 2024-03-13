import { getAllProducts } from "@/services/productServices";

export default async function handler(req, res) {
  const products = getAllProducts();
  res.status(200).json(products);
}
