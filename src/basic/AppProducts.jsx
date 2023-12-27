import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  return (
    <>
      {showProducts && (
        <Products checked={checked} handleChange={handleChange} />
      )}
      <button
        onClick={() => {
          setShowProducts((show) => !show);
        }}
      >
        Toggle
      </button>
    </>
  );
}
