import React from "react";
import Card from "../../../ui/Card";

const AvailableProducts = ({
  productsData,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-fit mx-auto">
      {productsData.map((product) => (
        <Card
          product={product}
          key={product.id}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        ></Card>
      ))}
    </div>
  );
};

export default AvailableProducts;
