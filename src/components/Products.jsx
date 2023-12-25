import React, { useEffect, useState } from "react";

export default function Products({ checked, handleChange }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("success");
        setProducts(data);
      });
    return () => {
      console.log("clear");
    };
  }, [checked]);

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Only Show Sale!</label>
      <ul>
        {products.map((product) => (
          // map의 item을 기반으로 자식을 만들때는 꼭 고유한 key 값을 정해줘야함
          // 이 key를 보고 업데이트 필요 유무와 배열에서의 순서등을 판단하기 떄문
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
