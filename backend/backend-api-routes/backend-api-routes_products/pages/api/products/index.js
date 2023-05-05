import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPages() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.id}: {product.name}
          </li>
        ))}
      </ul>
    </>
  );
}
