import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPages() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const products = data;

  return (
    <>
      <h1>Product {id}</h1>

      <h1>(data.name)</h1>
      <p>(data.description)</p>
    </>
  );
}
