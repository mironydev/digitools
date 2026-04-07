import React from "react";
import Card from "../../../ui/Card";

const AvailableProducts = ({
  productsData,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-fit mx-auto md:px-6 lg:px-0">
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
