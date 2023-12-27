import { useEffect, useState } from "react";

export default function useProducts({ saleOlny }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${saleOlny ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("success");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));
    return () => {};
  }, [saleOlny]);

  return [loading, error, products];
}
